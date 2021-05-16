import { HiCheckCircle } from "react-icons/hi";
import { useLocation, Redirect } from "react-router-dom";
import { useRef, useState } from "react";

import {
    Container,
    Title,
    Image,
    LinkContainer,
    Url,
    LinkButton,
    Message,
    IconContainer,
} from "./style/success";

function Success() {
    const [showMessage, setShowMessage] = useState(false);

    const location = useLocation<any>();

    const urlRef = useRef<HTMLInputElement>(null);

    const imageUrl = `http://localhost:5000${location.state?.url}`;

    function handleClick() {
        setShowMessage(true);
        navigator.clipboard.writeText(imageUrl);
    }

    return !(location.state?.url === undefined) ? (
        <Container>
            <IconContainer>
                <HiCheckCircle fontSize="56px" fill="green" />
            </IconContainer>
            <Title>Uploaded Successfully</Title>
            <Image src={imageUrl} alt="uploaded image" />
            <LinkContainer>
                <Url value={imageUrl} ref={urlRef} readOnly />
                <LinkButton onClick={handleClick}>Copy Link</LinkButton>
            </LinkContainer>
            {showMessage && <Message>Copied</Message>}
        </Container>
    ) : (
        <Redirect to="/" />
    );
}

export default Success;
