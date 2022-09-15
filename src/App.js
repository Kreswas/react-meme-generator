import './App.css';
import axios from 'axios';
import fileDownload from 'js-file-download';
import { useState } from 'react';

function App() {
  const [image, setImage] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [url, setUrl] = useState(
    'https://api.memegen.link/images/feelsgood/finally/did-it.jpg',
  );
  const handleDownload = async () => {
    await axios
      .get(url, {
        responseType: 'blob',
      })
      .then((res) => {
        fileDownload(res.data, `meme_${image}.jpg`);
      });
  };
  return (
    <div>
      <h1>Meme Generator</h1>
      <div>
        <img src={url} alt="meme" />
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          placeholder="Template"
          value={image}
          onChange={(event) => {
            setImage(event.currentTarget.value);
          }}
        />
      </form>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          placeholder="Top Text"
          value={topText}
          onChange={(event) => {
            setTopText(event.currentTarget.value);
          }}
        />
      </form>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          placeholder="Bottom Text"
          value={bottomText}
          onChange={(event) => {
            setBottomText(event.currentTarget.value);
          }}
        />
      </form>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <button
          onClick={() => {
            setUrl(
              `https://api.memegen.link/images/${image}/${topText}/${bottomText}.jpg`,
            );
          }}
        >
          Generate
        </button>
      </form>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <button onClick={handleDownload}>Download</button>
      </form>
    </div>
  );
}

export default App;
