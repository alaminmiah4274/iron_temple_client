const SubList = ({ sub }) => {
	return (
		<tr className="border-b hover:bg-gray-50">
			<td className="px-4 py-3 font-medium text-left">
				{sub.membership.name}
			</td>
			<td className="px-4 py-3 text-center">${sub.membership.price}</td>
			<td className="px-4 py-3 text-right">${sub.membership.price}</td>
		</tr>
	);
};

export default SubList;
