import React, { useState, useContext } from 'react';
import { ClipLoader } from 'react-spinners';
import Notify from './AllUse/Toasts';
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
    const { prompt, n, size } = FormData;
    if (prompt != null && n != null && size != null) {
      if (n < 1 || n > 10) {
        Notify.tError("Quantity number must be between 1 and 10.");
      }
      else {
        setIMGgenData(undefined);
        await IMGgen(FormData);
        Notify.tSuccess("Success!");
      }
    }
    else {
      Notify.tError("You didn't provide all required data!");
    }
  }



  return (
    <div>
      <h2 className='text-4xl my-8'>Image generator</h2>

      <form onSubmit={onSubmit}>

        <div className="form-control max-w-xs mt-5">
          <span className="label-text">What do you want to see?</span>
          <input type="text" placeholder="Type here" required className="input input-bordered input-primary w-full max-w-xs"
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
              <option selected disabled>Choose one...</option>
              <option value={"256x256"}>256x256</option>
              <option value={"512x512"}>512x512</option>
              <option value={"1024x1024"}>1024x1024</option>
            </select>
          </div>


          <button type='submit' className='btn btn-active bg-green-500 mt-10'>Generate!</button>
        </div>

        <div className='mt-20 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 content-center'>
          {IsLoading && <ClipLoader color="#36d7b7" size={150} />}
          {IMGgenData && IMGgenData.map((image, index) => (<img src={image.url} key={index} />))}


        </div>
      </form>
    </div>
  )
}

export default ImageGenerate