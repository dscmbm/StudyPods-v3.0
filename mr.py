import streamlit as st
import pickle
import pandas as pd
import requests


def fetch_poster(movie_id):
    response = requests.get(
        'https://api.themoviedb.org/3/movie/{}?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US'.format(
            movie_id))
    data = response.json()
    return "https://image.tmdb.org/t/p/w500/" + data['poster_path']


def recommend(mov):
    movie_index = movie[movie['title'] == mov].index[0]
    distances = similarity[movie_index]
    movie_list = sorted(list(enumerate(distances)), reverse=True, key=lambda x: x[1])[1:6]

    recommend_movie = []
    recommend_movie_posters = []
    for i in movie_list:
        movie_id = movie.iloc[i[0]].movie_id
        recommend_movie.append(movie.iloc[i[0]].title)
        recommend_movie_posters.append(fetch_poster(movie_id))

    return recommend_movie, recommend_movie_posters


st.title('Sp0308 da Adda')

movie_dict = pickle.load(open('movies_dict.pkl', 'rb'))
movie = pd.DataFrame(movie_dict)

option = st.selectbox('select the movie', movie['title'].values)

similarity = pickle.load(open('similarity.pkl', 'rb'))

if st.button('Recommend'):
    names, posters = recommend(option)

    col1, col2, col3, col4, col5 = st.columns(5)
    with col1:
        st.text(names[0])
        st.image(posters[0])
    with col2:
        st.text(names[1])
        st.image(posters[1])
    with col3:
        st.text(names[2])
        st.image(posters[2])
    with col4:
        st.text(names[3])
        st.image(posters[3])
    with col5:
        st.text(names[4])
        st.image(posters[4])
