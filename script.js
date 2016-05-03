/**
 * Created by erikaoneal on 5/3/16.
 */
var player1_array = [];
var player2_array = [];
var play_count = 1;
var cell_count = 3;
var cell_win_count = 3;
var win = false;
var player1_wins = 0;
var player2_wins = 0;

function make_move() {
    //main function executed on click. add image to block, call check_win, call check_draw, increase play_count
    if(play_count % 2 == 1){
       // var x = 'x';
        $('<img>').hasClass('.x').show();
      //  var x = $('<div>').addClass('img-responsive').html('<img src="images/x.png">');
      //  $(x).appendTo('<div>');
        play_count++;
        check_win();
        check_draw();
    }
    else{
       // var o = 'o';
        $('<img>').hasClass('.o').show();
       // var o = $('<div>').addClass('img-responsive').html('<img src="images/o.png">'); //addClass
      //  $(o).appendTo('<div>');
        play_count++;
        check_win();
        check_draw();
    }
}

function check_win(object) {
    //loop through array to compare win
    
    if (object.value == 'player1') {
        var temp_check_array = [];
        temp_check_array.push(object);

        //check column win
        for (i = 0; i < player1_array.length; i++) { //fill check array with all x's in that column
            var current_object = player1_array[i];
            if (current_object.column == object.column) {
                temp_check_array.push(current_object);
            }
        }

        if (temp_check_array >= cell_win_count) {       //checking if the x's are consecutive in that column

            temp_check_array.sort(function compare(a, b) { //sorting array from least number to greatest number of column
                if (a.column > b.column) {
                    return 1;
                }
                else if (a.column < b.column) {
                    return -1;
                }
                else {
                    return 0;
                }
            });

            var first_check_object = temp_check_array[0];
            var current_check_object = temp_check_array[0];

            for (i = 1; i < temp_check_array.length; i++) {

                for (j = 1; j <= cell_win_count; j++) {
                    if (temp_check_array[i].column == first_check_object.column + j) {
                        current_check_object = temp_check_array[i];

                        if (temp_check_array.indexOf(current_check_object) == temp_check_array.indexOf(first_check_object) + cell_win_count) {
                            display('Player 1 Wins!');
                            win = true;
                        }
                    }
                    else {
                        first_check_object = temp_check_array[i];
                        break;
                    }
                }

            }
        }
        
        //check row win
        if (!win) {

            var temp_check_array = [];
            temp_check_array.push(object);

            for (i = 0; i < player1_array.length; i++) { //fill check array with all x's in that column
                var current_object = player1_array[i];
                if (current_object.row == object.row) {
                    temp_check_array.push(current_object);
                }
            }

            if (temp_check_array >= cell_win_count) {       //checking if the x's are consecutive in that column

                temp_check_array.sort(function compare(a, b) { //sorting array from least number to greatest number of column
                    if (a.column > b.row) {
                        return 1;
                    }
                    else if (a.row < b.row) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                });

                var first_check_object = temp_check_array[0];
                var current_check_object = temp_check_array[0];

                for (i = 1; i < temp_check_array.length; i++) {

                    for (j = 1; j <= cell_win_count; j++) {
                        if (temp_check_array[i].row == first_check_object.row + j) {
                            current_check_object = temp_check_array[i];

                            if (temp_check_array.indexOf(current_check_object) == temp_check_array.indexOf(first_check_object) + cell_win_count) {
                                display('Player 1 Wins!');
                            }
                        }
                        else {
                            first_check_object = temp_check_array[i];
                            break;
                        }
                    }

                }
            }
        }

        //check diagonals
        if (!win) {
            temp_check_array = player1_array.splice();

            temp_check_array.sort(function compare(a, b) { //sorting player 1 array from least number to greatest number of column
                if (a.column > b.column) {
                    return 1;
                }
                else if (a.column < b.column) {
                    return -1;
                }
                else {
                    return 0;
                }
            });

            var first_check_object = temp_check_array[0];
            var current_check_object = temp_check_array[0];

            for (i = 1; i < temp_check_array.length; i++) {

                for (j = 1; j <= cell_win_count; j++) {
                    if (temp_check_array[i].row == first_check_object.row + j && temp_check_array[i].column == first_check_object.column + j) {
                        current_check_object = temp_check_array[i];

                        if (temp_check_array.indexOf(current_check_object) == temp_check_array.indexOf(first_check_object) + cell_win_count) {
                            display('Player 1 Wins!');
                        }
                    }
                    else if (temp_check_array[i].row == first_check_object.row - j && temp_check_array[i].column == first_check_object.column - j) {
                        current_check_object = temp_check_array[i];

                        if (temp_check_array.indexOf(current_check_object) == temp_check_array.indexOf(first_check_object) + cell_win_count) {
                            display('Player 1 Wins!');
                        }
                    }
                    else {
                        first_check_object = temp_check_array[i];
                        break;
                    }
                }

            }
        }

    }
    
   /*************** PLAYER 2 CHECK ******************/
    if (object.value == 'player2') {
        var temp_check_array = [];
        temp_check_array.push(object);

        //check column win
        for (i = 0; i < player2_array.length; i++) { //fill check array with all x's in that column
            var current_object = player2_array[i];
            if (current_object.column == object.column) {
                temp_check_array.push(current_object);
            }
        }

        if (temp_check_array >= cell_win_count) {       //checking if the x's are consecutive in that column

            temp_check_array.sort(function compare(a, b) { //sorting array from least number to greatest number of column
                if (a.column > b.column) {
                    return 1;
                }
                else if (a.column < b.column) {
                    return -1;
                }
                else {
                    return 0;
                }
            });

            var first_check_object = temp_check_array[0];
            var current_check_object = temp_check_array[0];

            for (i = 1; i < temp_check_array.length; i++) {

                for (j = 1; j <= cell_win_count; j++) {
                    if (temp_check_array[i].column == first_check_object.column + j) {
                        current_check_object = temp_check_array[i];

                        if (temp_check_array.indexOf(current_check_object) == temp_check_array.indexOf(first_check_object) + cell_win_count) {
                            display('Player 1 Wins!');
                            win = true;
                        }
                    }
                    else {
                        first_check_object = temp_check_array[i];
                        break;
                    }
                }

            }
        }

        //check row win
        if (!win) {

            var temp_check_array = [];
            temp_check_array.push(object);

            for (i = 0; i < player2_array.length; i++) { //fill check array with all x's in that column
                var current_object = player2_array[i];
                if (current_object.row == object.row) {
                    temp_check_array.push(current_object);
                }
            }

            if (temp_check_array >= cell_win_count) {       //checking if the x's are consecutive in that column

                temp_check_array.sort(function compare(a, b) { //sorting array from least number to greatest number of column
                    if (a.column > b.row) {
                        return 1;
                    }
                    else if (a.row < b.row) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                });

                var first_check_object = temp_check_array[0];
                var current_check_object = temp_check_array[0];

                for (i = 1; i < temp_check_array.length; i++) {

                    for (j = 1; j <= cell_win_count; j++) {
                        if (temp_check_array[i].row == first_check_object.row + j) {
                            current_check_object = temp_check_array[i];

                            if (temp_check_array.indexOf(current_check_object) == temp_check_array.indexOf(first_check_object) + cell_win_count) {
                                display('Player 1 Wins!');
                            }
                        }
                        else {
                            first_check_object = temp_check_array[i];
                            break;
                        }
                    }

                }
            }
        }

        //check diagonals
        if (!win) {
            temp_check_array = player2_array.splice();

            temp_check_array.sort(function compare(a, b) { //sorting player 2 array from least number to greatest number of column
                if (a.column > b.column) {
                    return 1;
                }
                else if (a.column < b.column) {
                    return -1;
                }
                else {
                    return 0;
                }
            });

            var first_check_object = temp_check_array[0];
            var current_check_object = temp_check_array[0];

            for (i = 1; i < temp_check_array.length; i++) {

                for (j = 1; j <= cell_win_count; j++) {
                    if (temp_check_array[i].row == first_check_object.row + j && temp_check_array[i].column == first_check_object.column + j) {
                        current_check_object = temp_check_array[i];

                        if (temp_check_array.indexOf(current_check_object) == temp_check_array.indexOf(first_check_object) + cell_win_count) {
                            display('Player 1 Wins!');
                        }
                    }
                    else if (temp_check_array[i].row == first_check_object.row - j && temp_check_array[i].column == first_check_object.column - j) {
                        current_check_object = temp_check_array[i];

                        if (temp_check_array.indexOf(current_check_object) == temp_check_array.indexOf(first_check_object) + cell_win_count) {
                            display('Player 1 Wins!');
                        }
                    }
                    else {
                        first_check_object = temp_check_array[i];
                        break;
                    }
                }

            }
        }

    }
}

function check_draw() {
    //see if gameboard is full and no win is present
}

function game_board() {
    //dynamically creates board according to cell_count
    
    
}

function reset() {
    //clear all the objects in arrays, clear gameboard
    function reset() {
        player_1 = [];
        player_2 = [];
        play_count = 1;
        cell_count = 3;
        player1_wins = 0;
        player2_wins = 0;
        $('.x, .o').(); // remove or toggle class??

    }

}
function display() {
    //shows stats, and highlights which player's turn it is
    If(win)
    { //player 1 wins needs from check win
        wins1++;
        $('.').text(' ' + player1_wins);
    }
    else{
        wins2++;
        $('.').text(' ' + player2_wins);
    }



}

$(document).ready(function(){
    $('.image-responsive').hide();
    $('').click(function(){
       make_move();
    });

    $('.reset').click(function(){
        reset();
    })
})
