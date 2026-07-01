interface Book {
    title: string;
}
const book: Book[] = [{
    title: "The Great Gatsby"
},
{
    title: "To Kill a Mockingbird"
},
{
    title: "1984"
}];

export async function GET() {
    return Response.json(book);
}