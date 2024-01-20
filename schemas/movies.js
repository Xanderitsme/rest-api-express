const z = require('zod')

const movieSchema = z.object({
  title: z.string({
    invalid_type_error: 'Movie must be a string',
    required_error: 'Movie title is required'
  }),
  year: z.number().int().min(1900).max(2025),
  director: z.string(),
  duration: z.number().positive(),
  poster: z.string().url({
    message: 'Poster must be a valid URL'
  }),
  genre: z.array(
    z.enum(['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', ' Horror', 'Thriller', 'Sci-Fi', 'Crime'])
  ),
  rate: z.number().min(0).max(10).default(5)
})

const validateMovie = (object) => {
  return movieSchema.safeParse(object)
}

const validateParcialMovie = (object) => {
  return movieSchema.partial().safeParse(object)
}

module.exports = {
  validateMovie, validateParcialMovie
}
