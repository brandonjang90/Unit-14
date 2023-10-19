let currentId = 0;

let movies = [];


$(function(){
    $('#movie-rating-form').on('submit', function(e){
        e.preventDefault();
        let movieName = $('#movie-name').val();
        let rating = $('#rating').val();
        let button = ('<button class="btn btn-danger " id="button" data-delete-id=${data.currentId}> Delete </button>');


        const newRow = $('<tr>');
        newRow.append('<td>' + movieName + '</td>');
        newRow.append('<td>' + rating + '</td>');
        newRow.append('<td>' + button + '</td>');

        $('#movies-table tbody').append(newRow);

        $('button').click(function(){
            newRow.remove();
        });
    });

        $('#movie-name').val('');
        $('#rating').val('');
});