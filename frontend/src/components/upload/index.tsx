import { useRef, ChangeEvent, DragEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import {
    Container,
    Heading,
    DragAndDrop,
    Image,
    Text,
    Button,
} from "./style/upload";
import Loading from "../loading";
import logo from "../../images/image.svg";
import { sendFile } from "../../services/api";

export default function Upload() {
    const [isUploading, setIsUploading] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement>(null);

    const history = useHistory();

    function handleClick() {
        const input = inputRef.current;

        if (input) {
            input.click();
        }
    }

    async function handleFile(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            setIsUploading(true);

            const file = e.target.files[0];
            const form = new FormData();
            form.append("image", file);
            const { data, success } = await sendFile(form);

            if (success) {
                setIsUploading(false);
                history.push("/success", { url: data.url });
            }
        }
    }

    async function handleDrop(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
        const items = e.dataTransfer.items;
        if (items) {
            const file = items[0];
            const image = file.getAsFile();

            if (
                (file.type === "image/jpeg" || file.type === "image/png") &&
                image
            ) {
                setIsUploading(true);
                const form = new FormData();
                form.append("image", image);
                const { data, success } = await sendFile(form);

                if (success) {
                    setIsUploading(false);
                    history.push("/success", { url: data.url });
                }
            }
        }
    }

    function handleDragOver(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
    }

    return isUploading ? (
        <Container>
            <Loading />
        </Container>
    ) : (
        <Container>
            <Heading>Upload Your Image</Heading>
            <Text>File Should be .Jpeg, Png...</Text>
            <DragAndDrop onDrop={handleDrop} onDragOver={handleDragOver}>
                <Image src={logo} alt="drag and drop" />
                <Text>Drag &amp; Drop your image here</Text>
            </DragAndDrop>
            <input
                type="file"
                ref={inputRef}
                hidden
                accept="image/jpeg, image/x-png"
                onChange={handleFile}
            />
            <Text>Or</Text>
            <Button onClick={handleClick}>Choose a file</Button>
        </Container>
    );
}
