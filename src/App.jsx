import React from 'react';
import ColorfulMessage from 'components/ColorfulMessage';
import "./styles/output.css"

const App = () => {
  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-color">こんにちは!</h1>
        <ColorfulMessage color='blue' text='お元気ですか？' />
        <ColorfulMessage color='pink' text='元気です！' />
        <button onClick={(event) => alert(event.target)}>ボタン</button>
      </div>
    </div>
  );
};

export default App;
