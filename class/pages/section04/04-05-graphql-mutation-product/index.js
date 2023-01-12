import { useMutation, gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
    mutation creatProduct(
        $seller: String
        $createProductInput: CreateProductInput!
    ) {
        #변수의 타입 적는곳
        createProduct( # 실제 우리가 전달할 변수 적는곳
            seller: $seller
            createProductInput: $createProductInput
        ) {
            _id
            number
            message
        }
    }
`;

export default function GraphqlMutationPage() {
    const [createProduct] = useMutation(CREATE_PRODUCT);

    const Submit = async () => {
        const result = await createProduct({
            variables: {
                seller: "훈이",
                createProductInput: {
                    name: "마우스",
                    detail: "정말 좋은 마우스",
                    price: 3000,
                },
            },
        });
        console.log(result);
    };

    // 한 줄일때 괄호() 필요 없음
    return <button onClick={Submit}>GRAPHQL - API 요청하기</button>;
}
