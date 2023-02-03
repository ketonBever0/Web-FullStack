import React, { useState, useContext } from 'react';
import { ClipLoader } from 'react-spinners';
import OpenAI_Context from './context/OpenAI_C';


function ImageGenerate() {

  const {
    IMGgen,
    IMGgenData, setIMGgenData,
    IsLoading
  } = useContext(OpenAI_Context);


  const [FormData, setFormData] = useState({
    prompt: "",
    n: 1,
    size: null
  });



  const handleChange = (event) => {
    setFormData({
      ...FormData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIMGgenData(undefined);
    await IMGgen(FormData);
  }



  return (
    <div>
      <h2 className='text-4xl my-8'>Image generator</h2>

      <form onSubmit={onSubmit}>

        <div className="form-control max-w-xs mt-5">
          <span className="label-text">What do you want to see?</span>
          <input type="text" required placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs"
            onChange={handleChange} id='prompt' name='prompt' value={FormData.prompt} />

          <div className="form-control w-full max-w-xs mt-4">
            <label className='label'>
              <span className="label-text">How many?</span>
              <span className="label-text-alt">1-10</span>
            </label>
            <input type="number" placeholder="Type here" min={1} max={10} required className="input input-bordered input-primary w-full max-w-xs"
              onChange={handleChange} id='n' name='n' value={FormData.n} />
          </div>

          <div className="form-control w-full max-w-xs mt-4">
            <label className='label'>
              <span className="label-text">Resolution:</span>
            </label>
            <select className="select select-primary w-full max-w-xs" required
              onChange={handleChange} id='size' name='size' value={FormData.size}>
              <option value={undefined} selected disabled>Choose one...</option>
              <option value={"256x256"}>256x256</option>
              <option value={"512x512"}>512x512</option>
              <option value={"1024x1024"}>1024x1024</option>
            </select>
          </div>


          <button type='submit' className='btn btn-active bg-green-500 mt-10'>Generate!</button>
        </div>

        <div className='mt-20 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 content-center'>
          {IsLoading && <ClipLoader color="#36d7b7" />}
          {/* 1 */}
          <div>
            {/* {IsLoading && <ClipLoader color="#36d7b7" />} */}
            {IMGgenData && IMGgenData.img0 && <img src={IMGgenData.img0} />}
          </div>

          {/* 2 */}
          <div>
            {/* {IsLoading && <ClipLoader color="#36d7b7" />} */}
            {IMGgenData && IMGgenData.img1 && <img src={IMGgenData.img1} />}
          </div>

          {/* 3 */}
          <div>
            {/* {IsLoading && <ClipLoader color="#36d7b7" />} */}
            {IMGgenData && IMGgenData.img2 && <img src={IMGgenData.img2} />}
          </div>

          {/* 4 */}
          <div>
            {/* {IsLoading && <ClipLoader color="#36d7b7" />} */}
            {IMGgenData && IMGgenData.img3 && <img src={IMGgenData.img3} />}
          </div>

          {/* 5 */}
          <div>
            {/* {IsLoading && <ClipLoader color="#36d7b7" />} */}
            {IMGgenData && IMGgenData.img4 && <img src={IMGgenData.img4} />}
          </div>

          {/* 6 */}
          <div>
            {/* {IsLoading && <ClipLoader color="#36d7b7" />} */}
            {IMGgenData && IMGgenData.img5 && <img src={IMGgenData.img5} />}
          </div>

          {/* 7 */}
          <div>
            {/* {IsLoading && <ClipLoader color="#36d7b7" />} */}
            {IMGgenData && IMGgenData.img6 && <img src={IMGgenData.img6} />}
          </div>

          {/* 8 */}
          <div>
            {/* {IsLoading && <ClipLoader color="#36d7b7" />} */}
            {IMGgenData && IMGgenData.img7 && <img src={IMGgenData.img7} />}
          </div>

          {/* 9 */}
          <div>
            {/* {IsLoading && <ClipLoader color="#36d7b7" />} */}
            {IMGgenData && IMGgenData.img8 && <img src={IMGgenData.img8} />}
          </div>

          {/* 10 */}
          <div>
            {/* {IsLoading && <ClipLoader color="#36d7b7" />} */}
            {IMGgenData && IMGgenData.img9 && <img src={IMGgenData.img9} />}
          </div>

        </div>
      </form >




    </div >
  )
}

export default ImageGenerate