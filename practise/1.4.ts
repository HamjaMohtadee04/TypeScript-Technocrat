// Task 4: Union and Intersection Types

interface Book {
    title: string;
    author: string;
    pages: number;
}

interface Magazine {
    title: string;
    issue: number;
    publisher: string;
}

type ReadingMaterial = Book | Magazine;
type DetailedPublication = Book & Magazine;
