import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

export const SlideIn = trigger('listStagger', [
    transition('* <=> *', [
      query(':enter', [
        style({ opacity: 0, transform: 'translateX(-35px)' }),
        stagger(
          '130ms',
          animate(
            '550ms ease-out',
            style({ opacity: 1, transform: 'translateX(0)' })
          )
        )
      ],
      { optional: true }),
      query(':leave', animate('50ms', style({ opacity: 0 })),
      { optional: true })
    ])
  ]);

