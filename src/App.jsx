import React, { useEffect, useState } from 'react';
import { ColorfulMessage } from 'components/ColorfulMessage';
import './styles/output.css';

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <div className='flex justify-center'>
      <div>
        <h1 className='text-color'>こんにちは!</h1>
        <ColorfulMessage color='blue' text='お元気ですか？' />
        <ColorfulMessage color='pink' text='元気です！' />
        <div className='flex flex-col space-y-2'>
          <button
            className='p-2 bg-gray-500 rounded text-white'
            onClick={() => setNum(num + 1)}
          >
            カウントアップ
          </button>
          <button className="border border-gray-700" onClick={() => setFaceShowFlag(!faceShowFlag)}>ON/OFF</button>
        </div>
        <p>{num}</p>
        {/* trueのときだけ表示する場合のイディオム的書き方 */}
        {faceShowFlag && <p>😎</p>}
      </div>
    </div>
  );
};

export default App;
