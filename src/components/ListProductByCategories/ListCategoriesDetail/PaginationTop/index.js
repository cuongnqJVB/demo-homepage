import React, { useState, useEffect } from "react";

const PaginationTop = (props) => {
    const { data } = props;
    let getNewData = [];
    let recordPerPage = 55;
    let [listData, setListData] = useState([]);
    let [currentPage, setCurrentPage] = useState(1);
    //   let [recordPerPage, setRecordPerPage] = useState(55);
    let [prevPage, setPrevPage] = useState(null);
    let [nextPage, setNextPage] = useState(null);

    useEffect(() => {
        if (data) {
            setListData(data);
        }
        changePage(currentPage);
    }, []);

    const totalPages = () => {
        if (data) {
            return Math.ceil(data.length / recordPerPage);
        }
    };

    const prev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage--);
            changePage(currentPage);
        }
    };
    const next = () => {
        if (currentPage < totalPages()) {
            setCurrentPage(currentPage++);
            changePage(currentPage);
        }
    };

    const changePage = (page) => {
        // Validate page
        if (page < 1) {
            page = 1;
        }
        if (page > totalPages()) {
            page = totalPages();
        }

        for (let i = (page - 1) * recordPerPage; i < page * recordPerPage; i++) {
            // new content after count
            getNewData.push(listData[i]);
            props.setDataAfterPagination(getNewData);
        }
        setCurrentPage(page);

        if (page == 1) {
            setPrevPage("disabled");
        } else {
            setPrevPage("");
        }

        if (page == totalPages()) {
            setNextPage("disabled");
        } else {
            setNextPage("");
        }
    };

    return (
        <div className="pagination-wrap">
            <span className="pagination-pages">
                {/* <span>1</span>/10 */}
                <span>{currentPage}</span>/{Math.ceil(data.length / recordPerPage)}
            </span>
            <div className="pagination-groupbtn">
                <button
                    id="button-prev"
                    className={`pagination--prev ${
                        prevPage === "disabled" ? "prev-page-inactive" : "prev-page-active"
                        }`}
                    onClick={() => {
                        prev();
                    }}
                    disabled={prevPage}
                >
                    <img src="./Images/ic-prev-page.svg" />
                </button>
                <button
                    id="button-next"
                    className={`pagination--next ${
                        nextPage === "disabled" ? "next-page-inactive" : "next-page-active"
                        }`}
                    onClick={() => {
                        next();
                    }}
                    disabled={nextPage}
                >
                    <img src="./Images/ic-next-page.svg" />
                </button>
            </div>
        </div>
    );
};

export default PaginationTop;
