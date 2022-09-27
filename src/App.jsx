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

  const compareFunction = (a, b) => {
    if (a[orderState.sortBy] < b[orderState.sortBy]) {
      return orderState.sortOrder === "asc" ? 1 : -1;
    } else if (a[orderState.sortBy] > b[orderState.sortBy]) {
      return orderState.sortOrder === "asc" ? -1 : 1;
    } else {
      return 0;
    }
  };

  const requestSort = (sortByProp) => {
    let newSortOrder = orderState.sortOrder;
    let newSortBy = orderState.sortBy;

    // 프롭스로 전달된 정렬기준이 스테이트에 저장된 정렬기준과 같은지에 따라 분기
    if (sortByProp === orderState.sortBy) {
      // 같다면 정렬순서만 변경한다

      newSortOrder = orderState.sortOrder === "asc" ? "desc" : "asc";
    } else {
      // 다르면 새 정렬기준을 스테이트에 저장하고, 정렬순서는 ASC 로 설정한다
      newSortBy = sortByProp;
      newSortOrder = "asc";
    }
    setOrderState((prev) => {
      return {
        ...prev,
        sortBy: newSortBy,
        sortOrder: newSortOrder
      };
    });

    console.log("prev data", orderState.sortData);

    // 데이터의 정렬을 변경한다
    const newSortData = data.sort(compareFunction);
    setOrderState((prev) => {
      return {
        ...prev,
        sortData: newSortData
      };
    });

    console.log("after data", orderState.sortData);
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
