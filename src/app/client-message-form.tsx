"use client";
import { submitMessage } from "@/actions/submitMessage";
import { useRef, useState, useTransition } from "react";

const ClientMessageForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [success, setSuccess] = useState(false);
    const [isPending, startTransition] = useTransition();

    return (
        <div className="flex flex-col items-center gap-4">
            {success && (
                <div className="mb-4 rounded-lg bg-green-500 p-4 text-white">
                    Message submitted successfully!
                </div>
            )}
            <form
                ref={formRef}
                action={async (formData) => {
                    try {
                        startTransition(() => {
                            submitMessage(formData);
                        });
                        formRef.current?.reset();
                        setSuccess(true);
                        setTimeout(() => setSuccess(false), 5000); // Hide success message after 5 seconds
                    } catch (error) {
                        console.error("Failed to submit message:", error);
                    }
                }}
                className="flex flex-col gap-4"
            >
                <div className="flex flex-row items-center justify-between gap-4">
                    <label htmlFor="name" className="text-slate-900">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-96 rounded-lg border-2 border-slate-900 p-2"
                        placeholder="Enter your name"
                        aria-required
                        required
                    />
                </div>
                <div className="flex flex-row items-center justify-between gap-4">
                    <label htmlFor="email" className="text-slate-900">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-96 rounded-lg border-2 border-slate-900 p-2"
                        placeholder="Enter your email"
                        aria-required
                        required
                    />
                </div>
                <div className="flex flex-row items-start justify-between gap-4">
                    <label htmlFor="message" className="text-slate-900">
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="w-96 rounded-lg border-2 border-slate-900 p-2"
                        placeholder="Enter your message"
                        aria-required
                        required
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="attachment" className="text-slate-900">
                        Attachment
                    </label>
                    <input
                        type="file"
                        id="attachment"
                        name="attachment"
                        className="w-96 rounded-lg p-2"
                        aria-required
                        required
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="rounded-lg bg-slate-950 px-4 py-2 text-slate-50 hover:bg-slate-800"
                    >
                        {isPending ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ClientMessageForm;
