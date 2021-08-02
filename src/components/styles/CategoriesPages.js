import styled from "styled-components";

const CategoriesPages = styled.div`
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 18px;
    h1:first-of-type {
        margin-bottom: 20px;
    }
    li {
        margin: 10px;
        a {
            color: #303030;
        }
    }
    li:hover {
        text-decoration: underline;
    }
`;

export default CategoriesPages;
