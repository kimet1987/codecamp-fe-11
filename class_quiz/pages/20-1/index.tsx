import { gql, useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int, $search: String) {
        fetchBoards(page: $page, search: $search) {
            _id
            writer
            title
            contents
        }
    }
`;

export default function staticRoutingMovedPage(): JSX.Element {
    const [key, setKey] = useState("");
    const { data, refetch } = useQuery(FETCH_BOARDS);

    const onClickPage = (e: MouseEvent<HTMLSpanElement>): void => {
        void refetch({ page: Number(e.currentTarget.id) });
    };

    const onDeBounce = _.debounce((value) => {
        refetch({ search: value, page: 1 });
        setKey(value);
    }, 500);

    const onSearch = (e: any) => {
        onDeBounce(e.currentTarget.value);
    };

    return (
        <>
            <div>
                검색어 : <input type="text" onChange={onSearch} />
            </div>
            {data?.fetchBoards.map((el: any) => (
                <div key={el._id}>
                    <span style={{ margin: "10px" }}>
                        {el.title
                            .replaceAll(key, `***${key}***`)
                            .split("***")
                            .map((el: any) => (
                                <span
                                    key={uuidv4()}
                                    style={{
                                        color: el === key ? "tomato" : "black",
                                    }}
                                >
                                    {el}
                                </span>
                            ))}
                    </span>
                    <span style={{ margin: "10px" }}>{el.writer}</span>
                </div>
            ))}

            {new Array(10).fill("철수").map((_, index) => (
                <span
                    key={index + 1}
                    id={String(index + 1)}
                    onClick={onClickPage}
                    style={{ margin: "0 10px", cursor: "pointer" }}
                >
                    {index + 1}
                </span>
            ))}
        </>
    );
}
