export default function Meta() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        background: #eee;
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .spinner {
        margin: 12px;
        width: 28px;
        height: 28px;
        animation: spinner-rotating 1.2s infinite;
        animation-timing-function: steps(12, end);
      }
      .spinner:before {
        content: '';
        display: block;
        width: 4px;
        height: 4px;
        margin: 0;
        margin-left: 12px;
        border-radius: 50%;
        background: #888;
        color: #ccc;
        box-shadow:
          6px 1.61px,
          10.39px 6px,
          12px 12px,
          10.39px 18px,
          6px 22.39px,
          0 24px,
          -6px 1.61px #999,
          -10.39px 6px #aaa,
          -12px 12px #bbb,
          -10.39px 18px,
          -6px 22.39px;
      }
      @keyframes spinner-rotating {
        from { transform: rotate(0deg) }
        to { transform: rotate(360deg) }
      }
      .title {
        font-size: 15px;
        margin-bottom: 3px;
      }
      .title > a {
        color: #000;
        text-decoration: none;
      }
      .title > a:visited {
        color: #828282;
      }
      .meta {
        font-size: 12px;
      }
      .source {
        font-size: 12px;
        display: inline-block;
        margin-left: 5px;
      }
      .source a,
      .meta a {
        color: #828282;
        text-decoration: none;
      }
      .source a:hover,
      .meta a:hover {
        text-decoration: underline;
      }
    `,
        }}
      />
    </>
  );
}
