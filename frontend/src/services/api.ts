export async function sendFile(form: FormData): Promise<any> {
    try {
        const res = await fetch("http://127.0.0.1:5000/api/", {
            method: "POST",
            body: form,
        });

        const json = await res.json();

        return { data: json, success: true };
    } catch (error) {
        console.log("Error in uploading image");
        return { data: null, success: false };
    }
}
