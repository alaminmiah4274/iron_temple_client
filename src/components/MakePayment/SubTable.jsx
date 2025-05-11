import SubList from "./SubList";

const SubTable = ({ sub }) => {
	return (
		<table className="table-auto w-full border-collapse">
			<thead>
				<tr className="bg-gray-50 border-b">
					<th className="px-4 py-3 text-left">Subscription</th>
					<th className="px-4 py-3 text-center">Price</th>
					<th className="px-4 py-3 text-right">Total</th>
				</tr>
			</thead>
			<tbody>
				<SubList sub={sub} />
			</tbody>
		</table>
	);
};

export default SubTable;
