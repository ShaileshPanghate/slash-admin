// import * as XLSX from "xlsx";
// import { useState } from "react";

// interface ExcelRow {
// 	[key: string]: any; // or define specific keys if known (e.g., Name: string, Age: number, Email: string)
// }
const Attendance = () => {
	// const [data, setData] = useState<ExcelRow[]>([]);
	// const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	const file = e.target.files?.[0];
	// 	if (!file) return;

	// 	const reader = new FileReader();
	// 	reader.onload = (event) => {
	// 		const data = new Uint8Array(event.target?.result as ArrayBuffer);
	// 		const workbook = XLSX.read(data, { type: "array" });
	// 		const sheetName = workbook.SheetNames[0];
	// 		const worksheet = workbook.Sheets[sheetName];
	// 		const jsonData = XLSX.utils.sheet_to_json(worksheet) as ExcelRow[];
	// 		console.log(jsonData); // 👈 You get array of rows here
	// 		console.log(data);
	// 		setData(jsonData);
	// 	};

	// 	reader.readAsArrayBuffer(file);
	// };

	return (
		<div>
			<h1>Employee Attendance</h1>
			<br />
			{/* <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} /> */}
			<br />
			{/* {data.length > 0 && (
				<table className="mt-6 w-full border border-gray-300 text-left">
					<thead>
						<tr className="bg-gray-100">
							{Object.keys(data[0]).map((key) => (
								<th key={key} className="p-2 border-b border-gray-300">
									{key}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{data.map((row, i) => (
							<tr key={i} className="border-b">
								{Object.keys(row).map((key) => (
									<td key={key} className="p-2 border-b border-gray-200">
										{row[key]}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			)} */}
		</div>
	);
};

export default Attendance;
