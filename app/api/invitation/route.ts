import {sendTelegramMessage} from "@/app/api/_helpers";

export async function POST(request: Request) {
    const body = await request.json();
    const {name, willAttend} = body;
    const message = `🎊 <b>${name}</b> sẽ ${willAttend ? '' : '<b>không </b>'}tham gia đám cưới`;
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
