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

export const IconContainer = styled.div`
    height: 56px;
`;

export const Title = styled.p`
    font-size: 1.2rem;
    margin: 1rem 0;
`;

export const Image = styled.img`
    width: 90%;
    max-height: 400px;
    object-fit: contain;
    border-radius: 12px;
`;

export const LinkContainer = styled.div`
    width: 90%;
    position: relative;
    margin: 1rem 0;
`;

export const Url = styled.input`
    outline: none;
    appearance: none;
    border: none;
    padding: 18px 93px 18px 18px;
    width: 100%;
    background-color: #f6f8fb;
    border-radius: 12px;
`;

export const LinkButton = styled.button`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    border-radius: 12px;
    appearance: none;
    border: none;
    outline: none;
    color: #fff;
    background-color: #2f80ed;
    padding: 12px;
    cursor: pointer;
`;

export const Message = styled.p`
    margin-top: 0.5rem 0;
`;
