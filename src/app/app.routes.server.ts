import { RenderMode, ServerRoute } from '@angular/ssr';

// Modificado e já inicializado pois estava dando conflito no build
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return [
        { username: 'edueirdo' },
      ];
    }
  }
];
