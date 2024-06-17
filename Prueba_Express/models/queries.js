queries = {
  getEntriesByEmail: `
    SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    WHERE a.email=$1
    ORDER BY e.title;`,
  getAllEntries: `SELECT * FROM entries;`,
  createEntry: `INSERT INTO entries(title,content,id_author,category) 
    VALUES ($1,$2,
    (SELECT id_author FROM authors WHERE email=$3),$4)`,
  updateEntry: `UPDATE entries
    SET 
        title = $1, 
        content = $2, 
        date =  $3, 
        id_author = (SELECT id_author FROM authors WHERE email = $4), 
        category = $5
    WHERE 
        title = $6`,
  getAllEntriesWithAuthor: `
    SELECT
        title,
        content,
        date,
        category,
        authors.name AS name,
        authors.surname AS surname,
        authors.image AS image
    FROM
        entries
    JOIN
        authors ON entries.id_author = authors.id_author`,
    getAuthorByEmail: `
        SELECT * FROM authors WHERE email = $1
    `,
    
   getAllAuthors: `
        SELECT * FROM authors
    `,
    
    createAuthor: `
        INSERT INTO authors (id_author, name, surname, email, image) 
        VALUES ($1, $2, $3, $4, $5)
    `,
    
    deleteAuthor: `
        DELETE FROM authors WHERE id_author = $1
    `,
    
    updateAuthor: `
        UPDATE authors
        SET id_author = $1, name = $2, surname = $3, email = $4, image = $5
        WHERE name = $6
    `
};

module.exports = queries;
