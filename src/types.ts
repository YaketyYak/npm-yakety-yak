export type YaketyYakOptions = {
    baseUrl?: string;
}

export type ReviewResponse = {
    id: '88e209ad-1d99-48e0-9125-7cea92e0d291',
    body: "Alice in a sulky tone, as it was all very well as she heard a little wider. 'Come, it's pleased so far,' said the Caterpillar. 'Not QUITE right, I'm afraid,' said Alice, and she could remember them, all these changes are! I'm never sure what I'm going.",
    rating: '4.0',
    reviewer: Pick<ReviewerResponse, 'name'>,
    reviewable: Pick<ReviewableResponse, 'id'|'custom_id'|'name'>,
};

export type ReviewerResponse = {
    name: string,
};

export type ReviewableResponse = {
    id: string,
    custom_id: string|null,
    name: string

};

export type PaginatedResponse<DataRow> = {
    data: DataRow[];
    pagination: PaginationObject;
}

export type PaginationObject = {
    currentPage: number;
    from: number;
    lastPage: number;
    perPage: number;
    to: number;
    total: number;
}