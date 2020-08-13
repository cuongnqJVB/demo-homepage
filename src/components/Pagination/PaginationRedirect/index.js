import React from "react";
import "../../../sass/global/components/_component.pagination.scss";

const Pagniation = () => {
    return (
        <div className="coco-paginate-wrap">
            <div className="coco-paginate-item">
                <img
                    src="./Images/sort-next.svg"
                    className="paginate-item--transform"
                    alt=""
                />
                <img
                    src="./Images/sort-down.svg"
                    className="paginate-item--transform"
                    alt=""
                />
                <div className="paginate-item--child">
                    <button>
                        <span>1</span>
                    </button>
                    <button>
                        <span>2</span>
                    </button>
                    <button>
                        <span>3</span>
                    </button>
                    <button>
                        <span>4</span>
                    </button>
                    <button>
                        <span>5</span>
                    </button>
                </div>
                <img src="./Images/sort-down.svg" alt="" />
                <img src="./Images/sort-next.svg" alt="" />
            </div>
        </div>
    );
}

export default Pagniation;