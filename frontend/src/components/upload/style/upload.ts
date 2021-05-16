import styled from "styled-components/macro";

export const Container = styled.div`
    padding: 48px;
    width: 50%;
    max-width: 572px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const Heading = styled.p`
    font-size: 1.4rem;
    margin: 1rem 0;
`;

export const Text = styled.p`
    color: #828282;
    margin: 1rem 0;
`;

export const DragAndDrop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 300px;
    justify-content: space-evenly;
    background-color: #f6f8fb;
    border-radius: 24px;
    padding: 12px;
    border: 1px dashed #2f80ed;
`;

export const Image = styled.img`
    width: 150px;
    object-fit: cover;
`;

export const Button = styled.button`
    appearance: none;
    border: none;
    outline: none;
    padding: 1rem;
    border-radius: 12px;
    background-color: #2f80ed;
    color: #fff;
    font-size: 0.85rem;
    cursor: pointer;
`;
