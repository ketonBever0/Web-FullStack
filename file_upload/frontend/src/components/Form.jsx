import React, { useContext, useEffect } from "react";
import Notify from "../allUse/Toasts";
import FileContext from "./context/fileContext";

function Form() {
	const {
		uploadFile,
		// inputFile, setInputFile,
		inputFiles,
		setInputFiles,
		files,
	} = useContext(FileContext);

	// useEffect(() => {
	//     console.log(inputFiles)
	// }, [inputFiles]);

	const handleChange = (e) => {
		setInputFiles(e.target.files);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (!inputFiles || inputFiles.length == 0)
			return Notify.tError("Nincs kiválasztva fájl!");

		// console.log("Feltöltés próba");

		await uploadFile(inputFiles);
	};

	return (
		<div className="mx-auto my-5 p-5">
			<form>
				<label htmlFor="formFile" className="fs-2 mb-4">
					Tölts fel képeket
				</label>
				<input
					className="form-control"
					type="file"
					id="formFile"
					name="file"
					multiple
					onChange={handleChange}
					accept="image/png, image/jpeg, image/gif"
				/>
				<div className="d-flex justify-content-md-between flex-column-reverse flex-md-row">
					<div>
						<button
							type="submit"
							className="btn btn-primary px-5 py-2 mt-4"
							onClick={onSubmit}
						>
							Feltöltés!
						</button>
					</div>
					<div className="">
						Eddig feltöltött fájlok:{" "}
						{(files && files.length) || "(Nem elérhető)"}
					</div>
				</div>
			</form>
		</div>
	);
}

export default Form;
