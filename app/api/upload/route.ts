import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "@/lib/auth";
import formidable, {errors as formidableErrors, IncomingForm} from 'formidable';
import { Readable } from 'stream';
import { PrismaClient, Prisma } from '@prisma/client'



  const prisma = new PrismaClient()


export const config = {
  api: {
    bodyParser: false, // Disable the default body parser
  },
};



export async function POST(req: NextRequest, res: NextResponse) {
    try {

        const formData = await req.formData();
        const file = formData.get("file");

        const user = await currentUser();
        if (!user) return;

        //console.log(user.id)

        const uploadDir = path.join(process.cwd(), 'public/uploads');

        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }


        const userUpload = await prisma.useruploads.create({
          data: {
            userid: user.id,
            userfilename: file?.name,
            tags: "casc",
          },
        });

        // const userUpload = await prisma.useruploads.create({
        //   data: {
        //     userid: "ashdkj",
        //     userfilename: "cjkashdkj",
        //     tags: "casc",
        //   },
        // });


        const filePath = path.join(uploadDir, file?.name);

        const fileStream = fs.createWriteStream(filePath);

        // Use readable stream for the file and pipe to writable stream
        const arrayBuffer = await file?.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        fileStream.write(buffer);
        fileStream.end();

        // You can wait for the stream to finish if needed
        fileStream.on('finish', () => {
            console.log('File uploaded successfully:', filePath);
        });

        return NextResponse.json({ message: 'File uploaded successfully', filePath });
        
    } catch (error) {
        return NextResponse.json({
            error:error
        }, {status: 500})
    }
};


// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === 'POST') {


//     return res.json("chekcing");

//     //console.log("checking");

//     const form = new formidable.IncomingForm();
//     form.uploadDir = uploadDir;
//     form.keepExtensions = true;

//     form.parse(req, async (err: any, fields: any, files: any) => {
//       if (err) {
//         res.status(500).json({ error: 'Error parsing the files' });
//         return;
//       }

//       res.status(200).json({ files });
//     });
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// };


