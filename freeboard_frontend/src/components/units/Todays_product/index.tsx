import { useEffect, useState } from "react";
import * as T from "../../../../styles/Todays_product";
import { IUseditem } from "../../../commons/types/generated/types";

export default function TodaysProduct() {
    const [todays, setTodays] = useState<IUseditem[]>();

    useEffect(() => {
        const todayItem = localStorage.getItem("todays");
        if (todayItem !== null) {
            try {
                const parsedTodayItem = JSON.parse(todayItem);
                setTodays(parsedTodayItem);
            } catch (err) {
                console.error(err);
            }
        }
    }, []);
    return (
        <div>
            {todays && (
                <T.Wrapper>
                    <h4>오늘 본 상품</h4>
                    <ul>
                        {todays.map((el: IUseditem, idx: number) =>
                            idx < 3 ? (
                                <li className="product" key={el._id}>
                                    {el.images !== null &&
                                    el.images !== undefined &&
                                    el.images[0] !== undefined &&
                                    el.images[0] !== "" ? (
                                        <img
                                            src={`https://storage.googleapis.com/${el.images[0]}`}
                                        />
                                    ) : (
                                        <div>No IMG</div>
                                    )}
                                    <button>{el.pickedCount}</button>
                                    <T.Info_wrap>
                                        <dt>{el.name}</dt>
                                        <dd className="remark">{el.remarks}</dd>
                                        <dd className="price">{el.price} 원</dd>
                                    </T.Info_wrap>
                                    <T.tags>{el.tags}</T.tags>
                                </li>
                            ) : null
                        )}
                    </ul>
                </T.Wrapper>
            )}
        </div>
    );
}
