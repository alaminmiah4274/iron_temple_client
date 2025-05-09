const FitnessSearchField = ({ searchQuery, setSearchQuery }) => {
	return (
		<label className="input outline-2 outline-rose-600 focus-within:outline-3 focus-within:outline-rose-600">
			<svg
				className="h-[1em] opacity-50"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				<g
					strokeLinejoin="round"
					strokeLinecap="round"
					strokeWidth="2.5"
					fill="none"
					stroke="currentColor"
				>
					<circle cx="11" cy="11" r="8"></circle>
					<path d="m21 21-4.3-4.3"></path>
				</g>
			</svg>
			<input
				type="text"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				required
				placeholder="search here..."
			/>
		</label>
	);
};

export default FitnessSearchField;
