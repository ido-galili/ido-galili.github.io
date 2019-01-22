let arr = []
let pages = ""
let key = "815faf55"
let query = {
    title: String,
    type: String,
    year: String
}

function sendForm() {
    if (!($('#title').val())) {
        alert("Movie Title is Required!")
    } else {
        query.title = $('#title').val()
        query.type = $('#type').val()
        query.year = $('#year').val()
        $('#show-single').html('')
        getMovies(1)
    }

}

function getMovies(page) {
    let url = `http://www.omdbapi.com/?apikey=${key}`

    url += `&s=${query.title}&type=${query.type}&y=${query.year}&r=json&page=${page}`

    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: url,
        async: false,
        success: function (data) {
            arr = data.Search
            pages = Math.floor(parseInt(data.totalResults) / 10)
            console.log(data)
        },
        error: function (error) {
            console.log("error : ", error)
        }
    })

    showMovies()
    showPagesFooter()
    $('#searchDiv').css("height", "100%")
}

function showPagesFooter() {
    $('#pages-footer').html('')
    let str = ``
    for (let i = 0; i < pages; i++) {
        if (i > 19) {
            break;
        }
        str = ``
        str += `<button class="btn btn-info m-2" onclick="getMovies(${i+1})">${i+1}</button>`
        $('#pages-footer').append(str)
    }

    $('#pages-footer').css("display", "block")

}

function getSingleMovie(id) {
    let url = `http://www.omdbapi.com/?apikey=${key}`

    let movie = {}

    url += `&i=${id}&plot=full`
    console.log(url)


    $.ajax({
        type: 'GET',
        datatype: 'json',
        url: url,
        async: false,
        success: function (data) {
            movie = data
            console.log(movie)
        },
        error: function (error) {
            console.log("error : ", error)
        }
    })

    showSingleMovie(movie)
}

function showMovies() {
    let str = ``

    arr.forEach((movie) => {
        let rand = Math.floor(Math.random() * 5) + 1

        str += `<div class="card m-2" style="width: 18rem;">`
        str += `<img src="${movie.Poster}" class="card-img-top" alt="...">`
        str += `<div class="card-body">`
        str += `<h5 class="card-title">${movie.Title}</a></h5>`
        str += `<h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>`
        str += `</div>`
        str += `<div class="card-footer">`

        for (i = 0; i < rand; i++) {
            str += `<i class="fas fa-star star-icon"></i>`
        }

        for (i = 0; i < 5 - rand; i++) {
            str += `<i class="far fa-star star-icon"></i>`
        }

        str += `<i class="fas fa-external-link-alt right-icon fa-2x" onclick="getSingleMovie('${movie.imdbID}')"></i>`
        str += `</div>`
        str += `</div>`
    })

    $('#movies').html(str)
}

function showSingleMovie(movie) {
    let rand = Math.floor(Math.random() * 4) + 1

    str = ``
    $('#show-single').html('')

    str += `<div class="card single m-2" style="width: 18rem;">`
    str += `<img src="${movie.Poster}" class="card-img-top" alt="...">`
    str += `<div class="card-body">`
    str += `<h5 class="card-title"><a href="${movie.Website}" target="_blank">${movie.Title}</a></h5>`
    str += `<h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>`

    str += `<div class="scroll-ing">`
    str += `<p>${movie.Plot}</p>`

    str += `</div>`
    str += `</div>`
    str += `<div class="card-footer">`
    str += `<i id="imdb-icon" class="fab fa-imdb fa-2x mr-2"></i><span>${movie.imdbRating}</span>`

    str += `<i class="far fa-window-close right-icon fa-3x" onclick="$('#show-single').html('')"></i>`

    str += `</div>`
    str += `</div>`

    $('#show-single').append(str)
}

$('#searchBtn').on('click', () => {
    sendForm()
})

$('#clearBtn').on('click', () => {
    document.getElementById('movie-form').reset()
    $('#movies').html('')
    $('#show-single').html('')
    $('#pages-footer').css("display", "none")
    $('#searchDiv').css("height", "100vh")
})