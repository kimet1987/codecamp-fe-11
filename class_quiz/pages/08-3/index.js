import { useState } from "react";
import * as S from "./style";

const dataList = [
    { id: 1, data: "9월달 시스템 점검 안내입니다.", date: "2020.09.19" },
    { id: 2, data: "안녕하세요! 공지사항 전달드립니다.", date: "2020.09.17" },
    { id: 3, data: "개인정보 처리방침 변경 사전 안내", date: "2020.09.12" },
    { id: 4, data: "ios 10.0이하 지원 중단 안내", date: "2020.08.10" },
    { id: 5, data: "이용약관 변경 사전 안내", date: "2020.08.01" },
    { id: 6, data: "개인정보 처리방침 변경 사전 안내", date: "2020.07.19" },
];

export default function List() {
    const [chkItems, setChkItems] = useState([]);

    const handleSingleChk = (checked, id) => {
        if (checked) {
            setChkItems((prev) => [...prev, id]);
        } else {
            setChkItems(chkItems.filter((el) => el !== id));
        }
        console.log(chkItems);
    };

    const handleAllChk = (checked) => {
        if (checked) {
            const idArr = [];
            dataList.forEach((el) => idArr.push(el.id));
            setChkItems(idArr);
        } else {
            setChkItems([]);
        }
    };

    const onAll = (e) => {
        handleAllChk(e.target.checked);
    };

    return (
        <S.Wrapper>
            <S.Header>
                <input
                    type="checkbox"
                    name="select_all"
                    onChange={onAll}
                    checked={chkItems.length === dataList.length ? true : false}
                />
                <span>번호</span>
                <span>제목</span>
                <span>작성일</span>
            </S.Header>
            <S.Contents>
                {dataList?.map((data) => (
                    <S.Notice key={data.id}>
                        <input
                            name={`select_${data.id}`}
                            type="checkbox"
                            onChange={(e) => {
                                handleSingleChk(e.target.checked, data.id);
                            }}
                            checked={chkItems.includes(data.id) ? true : false}
                        />
                        <span>{data.id}</span>
                        <span>{data.data}</span>
                        <span>{data.date}</span>
                    </S.Notice>
                ))}
            </S.Contents>
            <S.Del_btn>선택 삭제</S.Del_btn>
        </S.Wrapper>
    );
}
