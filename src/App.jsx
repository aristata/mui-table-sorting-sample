import MOCK_DATA from "./MOCK_DATA.json";
import CustomTable from "./CustomTable";
import { useState } from "react";

function App() {
  const data = MOCK_DATA;
  const [orderState, setOrderState] = useState({
    sortData: data,
    sortBy: "id",
    sortOrder: "asc"
  });

  const compareFunction = (a, b, sortBy, sortOrder) => {
    if (a[sortBy] < b[sortBy]) {
      return sortOrder === "asc" ? -1 : 1;
    } else if (a[sortBy] > b[sortBy]) {
      return sortOrder === "asc" ? 1 : -1;
    } else {
      return 0;
    }
  };

  const requestSort = (sortByProp) => {
    console.log("sortByProp", sortByProp);
    const {
      sortData: oldData,
      sortBy: oldSortBy,
      sortOrder: oldSortOrder
    } = orderState;

    let newSortOrder = oldSortOrder;
    let newSortBy = oldSortBy;
    let newData = oldData;

    // 프롭스로 전달된 정렬기준이 스테이트에 저장된 정렬기준과 같은지에 따라 분기
    if (sortByProp === oldSortBy) {
      // 같다면 정렬순서만 변경한다
      newSortOrder = oldSortOrder === "asc" ? "desc" : "asc";
    } else {
      // 다르면 새 정렬기준을 스테이트에 저장하고, 정렬순서는 ASC 로 설정한다
      newSortBy = sortByProp;
      newSortOrder = "asc";
    }
    console.log("newSortOrder", newSortOrder);
    console.log("newSortBy", newSortBy);
    newData = oldData.sort((a, b) =>
      compareFunction(a, b, newSortBy, newSortOrder)
    );
    setOrderState({
      sortData: newData,
      sortBy: newSortBy,
      sortOrder: newSortOrder
    });
  };

  return (
    <div>
      <CustomTable
        data={orderState.sortData}
        requestSort={requestSort}
        sortOrder={orderState.sortOrder}
        sortBy={orderState.sortBy}
      />
    </div>
  );
}

export default App;
