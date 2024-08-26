"use server";
import { writeFile } from "fs/promises";
import { join } from "path";

export const submitMessage = async (formData: FormData) => {
    "use server";
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    const attachment = formData.get("attachment") as unknown as File;
    const bytes = await attachment.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = join(
        process.cwd(),
        "public",
        "images",
        "messages",
        attachment.name,
    );

    try {
        await writeFile(path, buffer);
        await fetch(`${process.env.JSON_API_URL}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                message,
                attachment: `/images/messages/${attachment.name}`,
            }),
        });
    } catch (e) {
        console.error(e);
        return {
            error: e,
        };
    }
};
