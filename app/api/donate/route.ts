import {sendTelegramMessage} from "@/app/api/_helpers";

export async function POST(request: Request) {
    const body = await request.json();
    const {type} = body;
    let item;
    switch (type) {
        case 'catrang':
            item = 'túi catrang';
            break;
        case 'ciao':
            item = 'thùng ciao';
            break;
        default:
            item = '😻';
            break;
    }
    const message = `🎉 Bâu được donate <b>${item}</b>`;
    try {
        await sendTelegramMessage(message);
        return new Response(JSON.stringify({message: 'Hello world'}), {
            headers: {'content-type': 'application/json'},
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify({message: 'Error'}), {
            headers: {'content-type': 'application/json'},
            status: 500,
        });
    }
}
