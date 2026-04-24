const category = {
    name: "category",
    title: "Kategori",
    type: "document",
    fields: [
        {
            name: "categoryname",
            title: "Kategorinavn",
            type: "string"
        },

        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'categoryname',
                slugify: input => input
                                    .toLowerCase()
                                    .replace(/\s+/g, '-')
                                    .slice(0, 100)
            }
        }
    ]
}

export default category