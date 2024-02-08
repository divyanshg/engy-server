import * as NodeMediaServer from 'node-media-server';

import { Module, OnModuleInit } from '@nestjs/common';

@Module({})
export class MediaServerModule implements OnModuleInit {
  private readonly nms: NodeMediaServer;

  constructor() {
    this.nms = new NodeMediaServer({
      rtmp: {
        port: 1935,
        chunk_size: 60000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60,
      },
      http: {
        port: 8000,
        allow_origin: '*',
      },
    });
  }

  onModuleInit() {
    this.nms.on('prePublish', (id, StreamPath, args) => {
      console.log(
        '[NodeEvent on prePublish]',
        `id=${id} StreamPath=${StreamPath.split('/')[2]} args=${JSON.stringify(args)}`,
      );
      const session = this.nms.getSession(id);
      /* `session.reject();` is a method call that rejects the publishing of a stream. In the context
    of this code, it is called inside the `prePublish` event listener of the NodeMediaServer
    instance. */
      //   session.reject();
    });

    this.nms.run();
  }
}
