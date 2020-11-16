import pandas as pd

ratings_data = pd.read_csv("datasets/ratings.csv")
movie_names = pd.read_csv("datasets/movies.csv")

movie_data = pd.merge(ratings_data, movie_names, on='movieId')
print(movie_data.groupby('title')['rating'].count().sort_values(ascending=False).head())

ratings_mean_count = pd.DataFrame(movie_data.groupby('title')['rating'].mean())
ratings_mean_count['rating_counts'] = pd.DataFrame(movie_data.groupby('title')['rating'].count())

print(ratings_mean_count.head())
