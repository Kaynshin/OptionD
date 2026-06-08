type WordmarkProps = {
  variant: 'plain' | 'hero';
};

export default function Wordmark({ variant }: WordmarkProps) {
  if (variant === 'hero') {
    return (
      <div className="wm wm-anim" aria-label="Option/D">
        <span className="opt">
          <span>O</span>
          <span>p</span>
          <span>t</span>
          <span>i</span>
          <span>o</span>
          <span>n</span>
        </span>
        <span className="slash">/</span>
        <span className="d">D</span>
      </div>
    );
  }

  return (
    <div className="wm">
      Option<span className="accent">/D</span>
    </div>
  );
}
