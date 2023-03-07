import * as L from "../../../../../styles/products/list";
export default function MyPageList() {
    return (
        <L.Wrapper>
            <L.Header>
                <L.Sale_wrap>
                    <button className="active">판매중 상품</button>
                    <button>판매된 상품</button>
                </L.Sale_wrap>
                <L.Filter_wrap>
                    <L.Search_wrap>
                        <input type="text" placeholder="제품을 검색해주세요" />
                    </L.Search_wrap>
                    <L.Date_wrap>
                        <L.Input_wrap>
                            <input type="date" name="start" />
                            <input type="date" name="end" />
                        </L.Input_wrap>
                        <button>검색</button>
                    </L.Date_wrap>
                </L.Filter_wrap>
            </L.Header>

            <L.List_wrap>
                {/* {data?.fetchUseditems.map((el: any) => (
				<li key={el._id} id={el._id} onClick={onMove}>
					<L.Img_wrap>
						{el?.images[0] !== "" &&
						el?.images[0] !== undefined ? (
							<img
								src={`https://storage.googleapis.com/${el.images[0]}`}
							/>
						) : (
							<p>이미지 없음</p>
						)}
					</L.Img_wrap>
					<ul>
						<li>{el.name}</li>
						<li>{el.remarks}</li>
						<li>{el.tags}</li>
						<li>
							<L.Seller>
								<img src="/comment/user_img.svg" />
								<span>{el.seller.name}</span>
							</L.Seller>
							<L.Like>
								<img src="/heart.svg" />
								<span>{el.pickedCount}</span>
							</L.Like>
						</li>
					</ul>
					<L.price>
						<span>{el.price}</span>
						<span>원</span>
					</L.price>
				</li>
			))} */}
            </L.List_wrap>
            <L.Register_btn>상품 등록하기</L.Register_btn>
        </L.Wrapper>
    );
}
