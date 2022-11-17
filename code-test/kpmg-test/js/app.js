window.addEventListener("DOMContentLoaded", () => {
	const nodes = [
		{
			nodeId: "7",
			name: "Seven",
			parentId: null,
			previousSiblingId: "1",
		},
		{
			nodeId: "4",
			name: "Four",
			parentId: "2",
			previousSiblingId: "6",
		},
		{
			nodeId: "8",
			name: "Eight",
			parentId: "7",
			previousSiblingId: null,
		},
		{
			nodeId: "2",
			name: "Two",
			parentId: "1",
			previousSiblingId: null,
		},
		{
			nodeId: "6",
			name: "Six",
			parentId: "2",
			previousSiblingId: null,
		},
		{
			nodeId: "3",
			name: "Three",
			parentId: null,
			previousSiblingId: null,
		},
		{
			nodeId: "5",
			name: "Five",
			parentId: "4",
			previousSiblingId: null,
		},
		{
			nodeId: "1",
			name: "One",
			parentId: null,
			previousSiblingId: "3",
		},
	];

	const data = nodes.map((item) => {
		return {
			...item,
			children: [],
		};
	});

	function arraymove(arr, fromIndex, toIndex) {
		var element = arr[fromIndex];
		arr.splice(fromIndex, 1);
		arr.splice(toIndex, 0, element);
	}

	const result = data.reduce((acc, current) => {
		const match = data.find((item) => item.nodeId == current.parentId);
		if (match) {
			match.children.push(current);
		} else {
			acc.push({
				nodeId: current.nodeId,
				name: current.name,
				parentId: current.parentId,
				previousSiblingId: current.previousSiblingId,
				children: current.children,
			});
		}
		return acc;
	}, []);

	sorting(result, arraymove);





	console.log("result", result);

	// document.getElementById("jsonInput").textContent = JSON.stringify(
	// 	nodes,
	// 	undefined,
	// 	2
	// );
	// document.getElementById("jsonOutput").textContent = JSON.stringify(
	// 	result,
	// 	undefined,
	// 	2
	// );
});


function sorting(arr, arraymove) {
    arr.forEach((el, i) => {
        if (!el.previousSiblingId) {
            arraymove(arr, i, 0);
        } else {
            const next = arr.find((item) => {
                if (item.previousSiblingId) {
                    return item.previousSiblingId < el.previousSiblingId;
                }
            });

            if (next && arr.indexOf(next)) {
                const fromIndex = arr.indexOf(next);
                const toIndex = fromIndex + 1;
                arraymove(arr, fromIndex, toIndex);
            }
        }
    });
}

