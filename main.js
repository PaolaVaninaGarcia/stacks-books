let bookcart = []

const Add_To_Cart_Action = "addtocart"
const Remove_From_Cart_Action = "removefromcart"
const View_Cart_Action = "viewcart"

function viewcart() {
    console.log("current cart of book: ", bookcart)
}

function perforCatActions(action, newbook) {
    switch (action) {

        case Add_To_Cart_Action:
            bookcart.push(newbook)
            break;

        case Remove_From_Cart_Action:
            if (bookcart.length === 0) {
                console.log("Card book is empty, NO books to remove")
            } else {
                const removebook = bookcart.pop()
                console.log(`Remove_From_Cart_Action ${removebook}`)
            }
            break;

        case View_Cart_Action:
           viewcart()
            break;
        default:

    }
}


perforCatActions(Add_To_Cart_Action, "OTRO LIBRO")
perforCatActions(View_Cart_Action)
perforCatActions(Add_To_Cart_Action, "HISTORIA")
perforCatActions(Add_To_Cart_Action, "matemsticas")
perforCatActions(View_Cart_Action)
perforCatActions(Remove_From_Cart_Action)
perforCatActions(View_Cart_Action)
perforCatActions(Remove_From_Cart_Action)
perforCatActions(View_Cart_Action)

