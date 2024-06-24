interface PageProps {
    params: {
        id: string;
    };
}

export default function Read({ params }: PageProps) {
    return (
        <>
            <h2>Read</h2>
            <p>{params.id}</p>
        </>
    );
}
