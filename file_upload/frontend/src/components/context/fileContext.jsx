import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
import Notify from "../../allUse/Toasts";

const FileContext = createContext();

export const FileProvider = ({ children }) => {
	const [refresh, setRefresh] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const [files, setFiles] = useState(null);

    
	// Egy fájl esetén
	// const [inputFile, setInputFile] = useState(null);
	
    // Átírtam úgy, hogy több fájlt is lehessen egyszerre
    const [inputFiles, setInputFiles] = useState(null);

	const update = () => setRefresh((prev) => !prev);

	const fetchFiles = async () => {
		setIsLoading(true);
		// fetch('http://localhost:8000/api/files')
		//     .then(res => res.json())
		//     .then(data => setFiles(data))
		//     .catch(err => console.log(err));

		await axios
			.get("http://127.0.0.1:8000/api/files")
			.then((res) => setFiles(res.data));
		setIsLoading(false);
	};

	const uploadFile = async () => {

		//  A FormData egy olyan JavaScript-beli objektum, ami az űrlap feldolgozást könnyíti
		// - támogat fájlküldést, ahogy alább van használva
		const fileForm = new FormData();
		// hozzáadjuk a fájlokat "files" kulcsként
		for (let i = 0; i < inputFiles.length; i++) {
			fileForm.append("files", inputFiles[i]);
		}
		// console.log(fileForm.getAll("files"));

		// ha egyéb (pl. űrlap) adatokat akarsz küldeni, hozzáappendelheted pl. "xyform" kulcsnéven

		// Axios post-nál második paraméter az elküldendő adat, de itt nem "application/json" lesz
		await axios
			.post("http://localhost:8000/api/files", fileForm, {
				headers: {
					// "Content-Type": "multipart/form-data", //  Ezzel beállítjuk a tartalom típusát
				},
			})
			.then(Notify.tSuccess("Feltöltve!")) // ez mind1, csak egy üzenetet kapsz
			.catch((err) => console.log(err));

		// fetch()-et felejtsétek el! Axios jobb!
		// await fetch("http://localhost:8000/api/files", {
		// 	method: "POST",
		// 	body: {
		// 		files: {
		// 			file: file,
		// 		},
		// 	},
		// 	headers: {
		// 		"content-type": file.type,
		// 		"content-length": `${file.size}`,
		// 	},
		// })
		// 	.then((res) => res.json())
		// 	.then((data) => setFiles(data))
		// 	.catch((err) => console.log(err));

		//  Frissítés függvény újra lekérdezi az adatbázist
		update();
	};

	const deleteFile = async (path) => {
		await axios
			.delete(`http://127.0.0.1:8000/api/files/delete`, {
				data: { path: path },
			})
			.then((res) => Notify.tSuccess(res.data.message));
		update();
	};

	return (
		<FileContext.Provider
			value={{
				refresh,
				update,
				isLoading,
				fetchFiles,
				uploadFile,
				deleteFile,
				files,
				setFiles,
				// inputFile,
				// setInputFile,
                inputFiles,
				setInputFiles,
			}}
		>
			{children}
		</FileContext.Provider>
	);
};

export default FileContext;
