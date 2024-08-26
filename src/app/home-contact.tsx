import Container from "./container";
import ClientMessageForm from "./client-message-form";

const HomeContact = () => {
    return (
        <section
            className="flex h-screen scroll-m-[48px] flex-col items-center justify-center"
            id="contact"
        >
            <Container className="flex flex-col items-center justify-around gap-8">
                <h2 className="mb-2 py-8 text-4xl font-bold text-slate-900">
                    Contact Us
                </h2>
                <ClientMessageForm />
            </Container>
        </section>
    );
};

export default HomeContact;
