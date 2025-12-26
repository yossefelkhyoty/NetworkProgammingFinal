// جميع الأسئلة من ملف answers.txt
const questions = [
    // HTTP Questions
    {
        question: "Which statement best captures why layering is used in network architectures?",
        options: [
            "To ensure every layer uses the same protocol",
            "To enable interoperability and abstraction across heterogeneous systems",
            "To maximize physical-layer throughput",
            "To eliminate the need for error handling"
        ],
        correct: 1
    },
    {
        question: "In the deployed Internet architecture, HTTP resides primarily at which layer?",
        options: ["Transport", "Internet", "Application", "Link"],
        correct: 2
    },
    {
        question: "HTTP typically runs over which transport protocol and default port?",
        options: ["UDP, port 53", "TCP, port 80", "TCP, port 25", "UDP, port 443"],
        correct: 1
    },
    {
        question: "Which statement about HTTP's client–server model is accurate?",
        options: [
            "Servers initiate all connections",
            "Clients respond with status codes",
            "Clients send requests; servers return status, headers, and an optional body",
            "Both peers behave symmetrically"
        ],
        correct: 2
    },
    {
        question: "Which property characterizes HTTP by design?",
        options: [
            "Connection-oriented statefulness",
            "Statelessness at the application layer",
            "Reliable message ordering by the application",
            "Broadcast semantics"
        ],
        correct: 1
    },
    {
        question: "The first line of an HTTP/1.1 request is called the:",
        options: ["Status line", "Request line", "Header line", "Start line (response)"],
        correct: 1
    },
    {
        question: "Which is a valid HTTP/1.1 request line?",
        options: [
            "HTTP/1.1 200 OK",
            "GET /index.html HTTP/1.1",
            "Status: 200 OK",
            "POST HTTP/1.1 /submit"
        ],
        correct: 1
    },
    {
        question: "Which method is defined in HTTP/1.0 and remains in HTTP/1.1?",
        options: ["OPTIONS", "TRACE", "HEAD", "CONNECT"],
        correct: 2
    },
    {
        question: "Which property is correct about HTTP methods?",
        options: [
            "All methods are safe",
            "GET is safe and idempotent",
            "POST is idempotent",
            "DELETE is non-idempotent by definition"
        ],
        correct: 1
    },
    {
        question: "Which header most directly conveys session state to the client?",
        options: ["ETag", "Set-Cookie", "Content-Type", "Cache-Control: no-store"],
        correct: 1
    },
    {
        question: "Which 2xx status code indicates that a new resource was successfully created?",
        options: ["200", "201", "202", "204"],
        correct: 1
    },
    {
        question: "A 301 response means:",
        options: [
            "Temporary redirection",
            "Permanent redirection",
            "Client error due to authentication failure",
            "Server is unavailable"
        ],
        correct: 1
    },
    {
        question: "Which status code most appropriately signals 'Not Modified' for caching?",
        options: ["304", "204", "206", "412"],
        correct: 0
    },
    {
        question: "A 401 response specifically denotes:",
        options: [
            "Forbidden",
            "Not Found",
            "Unauthorized (authentication required)",
            "Proxy Authentication Required"
        ],
        correct: 2
    },
    {
        question: "A 503 response most likely indicates:",
        options: [
            "Resource permanently removed",
            "Service unavailable (often transient)",
            "Bad gateway at client",
            "Request timeout due to client error"
        ],
        correct: 1
    },
    {
        question: "Which best describes the URL component order?",
        options: [
            "scheme://host:port/path?query#fragment",
            "scheme://path/host:port?query#fragment",
            "host://scheme:port/path#fragment?query",
            "scheme://host/path:port?fragment#query"
        ],
        correct: 0
    },
    {
        question: "Why do web pages often incur multiple round-trip times (RTTs)?",
        options: [
            "Because TCP cannot multiplex streams",
            "Because a page typically references multiple objects (CSS/JS/images)",
            "Because HTTP requires per-header acknowledgments",
            "Because DNS is part of HTTP"
        ],
        correct: 1
    },
    {
        question: "Persistent connections primarily improve performance by:",
        options: [
            "Encrypting headers",
            "Reusing the same TCP connection for multiple requests",
            "Caching all responses on the client",
            "Disabling cookies"
        ],
        correct: 1
    },
    {
        question: "Which header historically controlled persistent connections prior to HTTP/1.1 defaults?",
        options: [
            "Connection: keep-alive",
            "Keep-Alive: on",
            "Cache-Control: persistent",
            "Transfer-Encoding: chunked"
        ],
        correct: 0
    },
    {
        question: "HTTP is plaintext, whereas HTTPS adds which security protocol?",
        options: ["IPSec", "SSH", "TLS", "SRTP"],
        correct: 2
    },
    {
        question: "Which is not a standard HTTP/1.1 method?",
        options: ["GET", "PUT", "PATCH (RFC 5789)", "PUBLISH"],
        correct: 3
    },
    {
        question: "Which header is most relevant when sending a JSON request body?",
        options: [
            "Content-Encoding: gzip",
            "Content-Type: application/json",
            "Accept-Language: en",
            'ETag: "abc"'
        ],
        correct: 1
    },
    {
        question: "Which status class represents client errors?",
        options: ["1xx", "2xx", "3xx", "4xx"],
        correct: 3
    },
    {
        question: "Which response header instructs the browser to return cookies on subsequent requests?",
        options: ["Cookie", "Set-Cookie", "Authorization", "WWW-Authenticate"],
        correct: 0
    },
    {
        question: "HTTP/1.1 requires which header in requests to origin servers?",
        options: ["Host", "Server", "Date", "Via"],
        correct: 0
    },
    {
        question: "Which Python socket call establishes a TCP connection from a client?",
        options: ["bind()", "listen()", "connect()", "accept()"],
        correct: 2
    },
    {
        question: "Which sequence correctly represents a minimal Python HTTP client workflow?",
        options: [
            "socket() → bind() → listen() → accept()",
            "socket() → connect() → send()/recv() → close()",
            "socket() → accept() → send()",
            "bind() → connect() → send()"
        ],
        correct: 1
    },
    {
        question: "On the server side, which call waits for an incoming connection?",
        options: ["connect()", "listen()", "accept()", "recv()"],
        correct: 2
    },
    {
        question: "A minimal iterative server loop most closely follows:",
        options: [
            "accept() → close()",
            "accept() → read request → write response → close",
            "connect() → send() → close()",
            "bind() → connect() → accept()"
        ],
        correct: 1
    },
    {
        question: "Concurrency in a Python HTTP server is commonly achieved by:",
        options: [
            "fork() only",
            "Threads or an event loop (e.g., selectors/asyncio)",
            "DNS load-balancing only",
            "Using UDP instead of TCP"
        ],
        correct: 1
    },
    // FTP Questions
    {
        question: "What does FTP stand for?",
        options: [
            "File Transfer Protocol",
            "File Transmission Program",
            "Fast Transfer Protocol",
            "File Transaction Process"
        ],
        correct: 0
    },
    {
        question: "Which TCP port is used for the FTP control channel?",
        options: ["22", "21", "25", "110"],
        correct: 1
    },
    {
        question: "Which port is used by FTP for data transfer in Active Mode?",
        options: ["21", "20", "22", "443"],
        correct: 1
    },
    {
        question: "FTP is considered a ______ protocol.",
        options: ["Stateless", "Stateful", "UDP-only", "One-way"],
        correct: 1
    },
    {
        question: "Which mode requires the server to initiate the data connection?",
        options: ["Passive Mode", "Active Mode", "Secure Mode", "Tunnel Mode"],
        correct: 1
    },
    {
        question: "Which protocol encrypts FTP commands and data using SSL/TLS?",
        options: ["SFTP", "FTPS", "TFTP", "SCP"],
        correct: 1
    },
    {
        question: "FTPS typically uses which secure port?",
        options: ["22", "465", "990", "587"],
        correct: 2
    },
    {
        question: "Which Python module provides built-in FTP functionality?",
        options: ["imaplib", "ftplib", "smtplib", "urllib"],
        correct: 1
    },
    {
        question: "Which Python class is used to establish an FTPS connection?",
        options: ["ftplib.FTP", "ftplib.FTP_TLS", "ftplib.FTP_SSL", "ssl.FTPSocket"],
        correct: 1
    },
    {
        question: "What does the Python method storbinary() do?",
        options: ["Downloads a file", "Uploads a binary file", "Deletes a file", "Changes directory"],
        correct: 1
    },
    {
        question: "Which Python method retrieves a binary file from the FTP server?",
        options: ["retrbinary()", "download()", "getfile()", "retrbin()"],
        correct: 0
    },
    {
        question: "What exception indicates a failed FTP temporary error in Python?",
        options: ["ftplib.error_perm", "ftplib.error_temp", "ftplib.error_reply", "OSError"],
        correct: 1
    },
    {
        question: "A permanent FTP error in Python triggers which exception?",
        options: ["error_temp", "error_perm", "error_proto", "ValueError"],
        correct: 1
    },
    {
        question: "Which method closes the FTP connection gracefully?",
        options: ["quit()", "close()", "exit()", "stop()"],
        correct: 0
    },
    {
        question: "What does the FTP command LIST do?",
        options: ["Uploads files", "Lists directory contents", "Deletes a file", "Displays users"],
        correct: 1
    },
    {
        question: "Which response code indicates command success in FTP?",
        options: ["1xx", "2xx", "3xx", "4xx"],
        correct: 1
    },
    {
        question: "What does FTP response code 530 mean?",
        options: ["File unavailable", "Login incorrect", "Transfer complete", "Syntax error"],
        correct: 1
    },
    {
        question: "FTP response code 150 indicates:",
        options: ["Opening data connection", "Permanent failure", "Syntax error", "Service unavailable"],
        correct: 0
    },
    {
        question: "Which Python method enables explicit FTPS (AUTH TLS)?",
        options: ["ftp.start_ssl()", "ftp.auth_tls()", "ftp.enable_tls()", "ftp.secure()"],
        correct: 1
    },
    {
        question: "In Python ftplib, which method switches to Passive Mode?",
        options: ["passive()", "setpassive()", "set_pasv(True)", "enable_pasv()"],
        correct: 2
    },
    // Socket Programming Questions
    {
        question: "In Python, which class do you instantiate to create a TCP/UDP socket?",
        options: [
            "socketserver.BaseServer",
            "socket.socket",
            "selectors.DefaultSelector",
            "asyncio.Transport"
        ],
        correct: 1
    },
    {
        question: "Calling s.connect(('127.0.0.1', 9999)) with no server listening will most likely raise:",
        options: ["TimeoutError", "ConnectionRefusedError", "ConnectionResetError", "socket.herror"],
        correct: 1
    },
    {
        question: "After s.settimeout(2.0), a blocking recv() that exceeds 2 seconds raises:",
        options: ["socket.timeout", "TimeoutError", "BlockingIOError", "socket.gaierror"],
        correct: 0
    },
    {
        question: "socket.getaddrinfo('no.such.domain', 80) typically raises:",
        options: [
            "ConnectionError",
            "socket.herror",
            "socket.gaierror",
            "OSError with EADDRINUSE"
        ],
        correct: 2
    },
    {
        question: "On a non-blocking socket, a recv() that would block raises:",
        options: [
            "BlockingIOError",
            "BrokenPipeError",
            "ConnectionAbortedError",
            "PermissionError"
        ],
        correct: 0
    },
    {
        question: "When using Python sockets, which exception is raised if a connection attempt is refused by the target host?",
        options: ["socket.error", "ConnectionRefusedError", "TimeoutError"],
        correct: 1
    },
    {
        question: "Which exception indicates that a socket was forcibly closed by the remote host?",
        options: ["BrokenPipeError", "ConnectionAbortedError", "socket.timeout"],
        correct: 1
    },
    {
        question: "Which module in Python is used for socket programming?",
        options: ["network", "socket", "netlib", "sys"],
        correct: 1
    },
    {
        question: "Which of the following creates a UDP socket?",
        options: ["SOCK_STREAM", "SOCK_DGRAM", "SOCK_RAW", "SOCK_SEQPACKET"],
        correct: 1
    },
    {
        question: "What will `s.bind(('127.0.0.1', 5000))` do?",
        options: [
            "Connect to the server",
            "Assign an IP and port to the socket",
            "Send data",
            "Receive data"
        ],
        correct: 1
    },
    {
        question: "Which function listens for incoming connections?",
        options: ["socket.connect()", "socket.listen()", "socket.accept()", "socket.recv()"],
        correct: 1
    },
    {
        question: "What is returned by `socket.accept()`?",
        options: [
            "Only the client address",
            "Only the new socket object",
            "A tuple (new_socket, client_address)",
            "Nothing"
        ],
        correct: 2
    },
    // SMTP/POP3/IMAP Questions
    {
        question: "Which protocol is primarily used for sending email messages from a client to a mail server?",
        options: ["POP3", "IMAP", "SMTP", "FTP"],
        correct: 2
    },
    {
        question: "Which port is the default port for SMTP without encryption?",
        options: ["80", "25", "110", "143"],
        correct: 1
    },
    {
        question: "POP3 operates mainly on which port by default?",
        options: ["995", "110", "143", "587"],
        correct: 1
    },
    {
        question: "IMAP commonly uses which default port for unencrypted communication?",
        options: ["25", "110", "143", "443"],
        correct: 2
    },
    {
        question: "Which protocol allows email clients to keep messages synchronized across multiple devices?",
        options: ["POP3", "SMTP", "FTP", "IMAP"],
        correct: 3
    },
    {
        question: "Which protocol removes messages from the server by default after downloading?",
        options: ["IMAP", "POP3", "SMTP", "HTTP"],
        correct: 1
    },
    {
        question: "Which Python module is used for sending emails using SMTP?",
        options: ["imaplib", "poplib", "smtplib", "httplib"],
        correct: 2
    },
    {
        question: "Which Python module is commonly used to retrieve email messages using POP3?",
        options: ["poplib", "smtplib", "ftplib", "imaplib"],
        correct: 0
    },
    {
        question: "Which Python module is used for interacting with IMAP servers?",
        options: ["smtplib", "imaplib", "socket", "ftplib"],
        correct: 1
    },
    {
        question: "Which protocol is stateless by design?",
        options: ["SMTP", "POP3", "IMAP", "HTTP"],
        correct: 3
    },
    {
        question: "HTTP 404 response code means:",
        options: ["OK", "Bad Request", "Not Found", "Forbidden"],
        correct: 2
    },
    {
        question: "Which protocol supports folder-level email management on the server?",
        options: ["POP3", "SMTP", "IMAP", "FTP"],
        correct: 2
    },
    {
        question: "Which header is best used to advertise the format of the response body?",
        options: ["Accept", "Content-Type", "Content-Length", "Allow"],
        correct: 1
    },
    {
        question: "Which status code best indicates partial content delivery (e.g., range requests)?",
        options: ["200", "202", "206", "416"],
        correct: 2
    },
    {
        question: "Statelessness in HTTP implies that:",
        options: [
            "The server never stores any data",
            "Each request is self-contained; the protocol does not retain per-client session state",
            "Cookies are required for every request",
            "TCP is stateless"
        ],
        correct: 1
    },
    {
        question: "Which header field is commonly used to control caching behavior?",
        options: ["Cache-Control", "Connection", "Upgrade-Insecure-Requests", "Server"],
        correct: 0
    },
    {
        question: "In Python, which method sends bytes on a TCP socket?",
        options: ["write_text()", "send()", "dispatch()", "emit()"],
        correct: 1
    },
    {
        question: "What is the role of bind() in a Python TCP server?",
        options: [
            "Associates the socket with a local address/port",
            "Initiates a connection to a remote host",
            "Sends data on an established connection",
            "Receives data on an established connection"
        ],
        correct: 0
    },
    {
        question: "listen() in a TCP server:",
        options: [
            "Places the socket in a passive state to queue incoming connections",
            "Reads the next HTTP request line",
            "Sends the status line to the client",
            "Resolves DNS queries"
        ],
        correct: 0
    },
    {
        question: "accept() returns:",
        options: [
            "A boolean indicating whether a client is authorized",
            "A file descriptor for logging only",
            "A new socket object for the connection and the client address",
            "The HTTP method string"
        ],
        correct: 2
    },
    {
        question: "Which logging practice is most appropriate for HTTP servers?",
        options: [
            "Log only fatal exceptions",
            "Record request line, status code, bytes sent, and timing in structured logs",
            "Disable logs in production",
            "Log request bodies only"
        ],
        correct: 1
    },
    {
        question: "Which status code most appropriately maps to a malformed request line?",
        options: ["400", "401", "403", "500"],
        correct: 0
    },
    {
        question: "Which is the most accurate statement about HTTPS?",
        options: [
            "It changes HTTP semantics and methods",
            "It encapsulates HTTP in TLS to provide confidentiality, integrity, and server authentication",
            "It requires UDP for performance",
            "It eliminates the need for cookies"
        ],
        correct: 1
    },
    {
        question: "Which method is commonly used to upload or replace a resource at a known URI?",
        options: ["GET", "PUT", "HEAD", "TRACE"],
        correct: 1
    },
    {
        question: "Which method retrieves only header metadata without a response body?",
        options: ["HEAD", "OPTIONS", "GET", "CONNECT"],
        correct: 0
    },
    {
        question: "Which header line properly declares the HTTP version in a response?",
        options: ["HTTP/1.1 200 OK", "Status: 200 OK", "Version: HTTP/1.1", "Response-Line: 200 OK"],
        correct: 0
    },
    {
        question: "Which Python snippet best represents sending an HTTP GET using a raw socket?",
        options: [
            's.send(b"200 OK\\r\\n\\r\\n")',
            's.send(b"GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n")',
            's.connect(("udp", 80))',
            "s.listen(80)"
        ],
        correct: 1
    },
    {
        question: "A correct minimal HTTP response from a Python server must include at least:",
        options: [
            "Status line and Content-Type",
            "Status line and Host",
            "Server header and body",
            "Status line and Date"
        ],
        correct: 0
    },
    {
        question: "Which header typically communicates response size when not using chunked transfer?",
        options: ["Content-Encoding", "Content-Length", "Accept-Ranges", "Age"],
        correct: 1
    },
    {
        question: "Which response best indicates that the server understands the request method but refuses to authorize it?",
        options: ["401", "403", "405", "415"],
        correct: 1
    },
    {
        question: "Which error handling choice is most appropriate for an unknown method at a valid endpoint?",
        options: [
            "404 Not Found",
            "405 Method Not Allowed (+ Allow)",
            "501 Not Implemented but valid for resource",
            "500 Internal Server Error"
        ],
        correct: 1
    },
    {
        question: "Which of the following is true about cookies?",
        options: [
            "They are transported only in response bodies",
            "They replace the need for TLS",
            "They help implement sessions over a stateless protocol by storing identifiers client-side",
            "They are required for HTTP/1.1 compliance"
        ],
        correct: 2
    },
    // More FTP Questions
    {
        question: "An advantage of Passive Mode FTP is:",
        options: [
            "Faster transfer",
            "Works behind NAT and firewalls",
            "Uses fewer ports",
            "Automatically encrypted"
        ],
        correct: 1
    },
    {
        question: "Which type of encryption does FTPS use?",
        options: ["SSH", "TLS/SSL", "IPsec", "GPG"],
        correct: 1
    },
    {
        question: "Which of the following is NOT a benefit of FTP?",
        options: [
            "High-speed file transfer",
            "Reliability",
            "Built-in encryption",
            "Support for large files"
        ],
        correct: 2
    },
    {
        question: "Which of the following is a disadvantage of FTPS?",
        options: [
            "Slow transfer",
            "Complex firewall configuration",
            "Lack of authentication",
            "Requires UDP"
        ],
        correct: 1
    },
    {
        question: "Python's ftplib allows anonymous login using:",
        options: [
            'ftp.login("public")',
            'ftp.login("anonymous")',
            "ftp.anon()",
            "ftp.anonymous_login()"
        ],
        correct: 1
    },
    {
        question: "Which command uploads a file in ASCII mode?",
        options: ["STOR", "STORASCII", "STOR A", "STOR TEXT"],
        correct: 0
    },
    {
        question: "The FTP command RETR is used for:",
        options: ["Uploading", "Downloading", "Deleting", "Renaming"],
        correct: 1
    },
    {
        question: "Which Python exception indicates a protocol error?",
        options: [
            "ftplib.error_temp",
            "ftplib.error_perm",
            "ftplib.error_proto",
            "ConnectionRefusedError"
        ],
        correct: 2
    },
    {
        question: "Which method is used to list files line-by-line in Python?",
        options: ["list()", 'retrlines("LIST")', "dir()", "ls()"],
        correct: 1
    },
    {
        question: "FTPS Explicit Mode uses which port initially?",
        options: ["990", "443", "21", "587"],
        correct: 2
    },
    {
        question: "FTPS Implicit Mode requires connection on which port?",
        options: ["21", "990", "80", "22"],
        correct: 1
    },
    {
        question: "Which command in FTP renames a file?",
        options: ["RENAME", "RMDIR", "RNFR / RNTO", "CHNAME"],
        correct: 2
    },
    {
        question: "Which Python ftplib method deletes a file?",
        options: ["ftp.delete()", "ftp.remove()", "ftp.erase()", "ftp.del()"],
        correct: 0
    },
    {
        question: "What does the command PWD do?",
        options: [
            "Prints working directory",
            "Changes password",
            "Downloads a file",
            "Opens data connection"
        ],
        correct: 0
    },
    {
        question: "Which Python module is required to wrap FTP sockets for FTPS?",
        options: ["ssl", "crypto", "secure", "secmod"],
        correct: 0
    },
    {
        question: "Which FTPS mode encrypts both control and data channels?",
        options: ["Partial SSL", "Full SSL", "Hybrid Mode", "Data-only Mode"],
        correct: 1
    },
    {
        question: "Which response code indicates a temporary error?",
        options: ["2xx", "3xx", "4xx", "5xx"],
        correct: 2
    },
    {
        question: "Which response code indicates a permanent error?",
        options: ["2xx", "3xx", "4xx", "5xx"],
        correct: 3
    },
    {
        question: "A common FTPS issue is:",
        options: [
            "Incompatible SSL certificates",
            "Missing POP3 credentials",
            "HTTP conflict",
            "SMTP timeout"
        ],
        correct: 0
    },
    {
        question: "What is the primary use of FTP and FTPS?",
        options: [
            "Email routing",
            "Web browsing",
            "Secure and non-secure file transfer",
            "Remote command execution"
        ],
        correct: 2
    },
    // More Socket Questions
    {
        question: "Sending a large UDP datagram beyond MTU without fragmentation can raise (OS dependent):",
        options: [
            "socket.timeout",
            "socket.gaierror",
            'OSError with EMSGSIZE ("Message too long")',
            "ConnectionRefusedError"
        ],
        correct: 2
    },
    {
        question: "What is the most appropriate block to release a socket resource even if an exception occurs?",
        options: ["try / except", "try / finally", "try / else"],
        correct: 1
    },
    {
        question: "Which built-in Python exception is raised when reading from a closed socket?",
        options: [
            "ConnectionResetError",
            "OSError: [Errno 9] Bad file descriptor",
            "socket.timeout"
        ],
        correct: 1
    },
    {
        question: "In socket.connect(), if the host is unreachable, Python raises:",
        options: [
            "ConnectionRefusedError",
            "OSError: [Errno 113] No route to host",
            "ConnectionResetError"
        ],
        correct: 1
    },
    {
        question: "When using socket.settimeout(5), a read operation exceeding this time raises:",
        options: ["OSError", "socket.timeout", "ConnectionResetError"],
        correct: 1
    },
    {
        question: "Which Python module defines the base class for many network-related exceptions?",
        options: ["sys", "socket", "asyncio"],
        correct: 1
    },
    {
        question: "If the client disconnects unexpectedly, what exception might the server raise while sending data?",
        options: ["BrokenPipeError", "socket.timeout", "TimeoutError"],
        correct: 0
    },
    {
        question: "When an invalid IP address is passed to socket.connect(), which error is raised?",
        options: ["ConnectionRefusedError", "socket.gaierror", "ValueError"],
        correct: 1
    },
    {
        question: "What exception is raised when binding a socket to an already-used port?",
        options: [
            "OSError: [Errno 98] Address already in use",
            "socket.timeout",
            "ConnectionAbortedError"
        ],
        correct: 0
    },
    {
        question: "When recv() returns an empty bytes object (b''), it means:",
        options: [
            "Timeout occurred",
            "Connection was closed by the peer",
            "Packet lost"
        ],
        correct: 1
    },
    {
        question: "Which exception type indicates DNS resolution failed?",
        options: ["ConnectionRefusedError", "socket.gaierror", "socket.timeout"],
        correct: 1
    },
    {
        question: "Which exception is raised when the server forcibly closes a TCP connection?",
        options: ["ConnectionResetError", "socket.timeout", "BrokenPipeError"],
        correct: 0
    },
    {
        question: "Sockets in Python provide an interface that lets applications send and receive data using TCP/UDP. This functionality is MOST closely associated with which OSI layer?",
        options: ["Application Layer", "Transport Layer", "Network Layer", "Physical Layer"],
        correct: 1
    },
    {
        question: "What does this code do? s = socket.socket(); s.connect(('localhost', 8080))",
        options: [
            "Creates a UDP connection",
            "Creates a TCP client socket and connects to port 8080",
            "Creates a server socket",
            "Binds the socket to the local host"
        ],
        correct: 1
    },
    {
        question: "If a socket error occurs, which exception is typically raised in Python?",
        options: ["IOError", "ValueError", "socket.error", "OSError"],
        correct: 2
    },
    {
        question: "What happens if you call `s.recv(1024)` on a blocking socket with no data yet?",
        options: [
            "Returns empty string immediately",
            "Waits (blocks) until data arrives",
            "Closes the connection",
            "Throws an exception"
        ],
        correct: 1
    },
    {
        question: "Which of the following closes a socket correctly?",
        options: ["s.disconnect()", "s.shutdown()", "s.close()", "s.exit()"],
        correct: 2
    },
    {
        question: "Which protocol ensures reliable delivery of data?",
        options: ["UDP", "TCP", "IP", "ICMP"],
        correct: 1
    },
    {
        question: "Which function sends data to a connected TCP socket?",
        options: ["s.put()", "s.send()", "s.post()", "s.write()"],
        correct: 1
    },
    {
        question: "What will happen if you bind twice to the same port (without special reuse options)?",
        options: [
            "Works fine",
            'Raises "Address already in use" error',
            "Closes socket automatically",
            "Creates two sockets"
        ],
        correct: 1
    },
    {
        question: "Which of the following is true about UDP sockets?",
        options: [
            "Connection-oriented",
            "Reliable delivery",
            "Connectionless",
            "Requires three-way handshake"
        ],
        correct: 2
    },
    {
        question: "To handle multiple client connections efficiently, which approach/module can be used?",
        options: [
            "multiprocessing",
            "threading or select",
            "asyncio only",
            "random"
        ],
        correct: 1
    },
    {
        question: "Which socket method allows switching to non-blocking mode?",
        options: ["setblocking(False)", "setblock(0)", "async(False)", "nonblock()"],
        correct: 0
    },
    {
        question: "Which is a correct example of a server socket setup?",
        options: [
            "Client socket",
            "Server socket ready to accept connections",
            "UDP connection",
            "Invalid code"
        ],
        correct: 1
    },
    // More SMTP/POP3/IMAP Questions
    {
        question: "Which protocol uses separate control and data channels?",
        options: ["SMTP", "POP3", "HTTP", "FTP"],
        correct: 3
    },
    {
        question: "Which protocol typically responds with codes such as 220, 250, and 354?",
        options: ["IMAP", "POP3", "SMTP", "FTP"],
        correct: 2
    },
    {
        question: "FTP servers commonly return a success response starting with which digit?",
        options: ["1", "2", "3", "4"],
        correct: 1
    },
    {
        question: "Which protocol is generally more bandwidth efficient for mobile devices?",
        options: ["POP3", "IMAP", "SMTP", "FTP"],
        correct: 0
    },
    {
        question: "POP3 servers typically respond with a positive status using which prefix?",
        options: ["OK", "+OK", "200", "SUCCESS"],
        correct: 1
    },
    {
        question: "SMTP error code 550 indicates:",
        options: ["Message accepted", "Mailbox unavailable", "Syntax error", "Server ready"],
        correct: 1
    },
    {
        question: "In Python, which exception is commonly raised when SMTP authentication fails?",
        options: [
            "smtplib.SMTPServerDisconnected",
            "smtplib.SMTPAuthenticationError",
            "smtplib.SMTPRecipientsRefused",
            "socket.timeout"
        ],
        correct: 1
    },
    {
        question: "In IMAP, which command retrieves message headers?",
        options: ["LIST", "SELECT", "FETCH", "RETR"],
        correct: 2
    },
    {
        question: "Which protocol encrypts communication using SSL/TLS on port 993 by default?",
        options: ["SMTP", "POP3", "IMAP", "FTP"],
        correct: 2
    },
    {
        question: "Python's poplib throws which exception for protocol errors?",
        options: ["POP3Error", "POPError", "poplib.error_proto", "poplib.Exception"],
        correct: 2
    },
    {
        question: "Which protocol supports partial message download?",
        options: ["POP3", "SMTP", "IMAP", "FTP"],
        correct: 2
    },
    {
        question: "A drawback of POP3 is:",
        options: [
            "Requires constant internet connection",
            "Cannot synchronize state across multiple devices",
            "Cannot allow message retrieval",
            "Requires high bandwidth"
        ],
        correct: 1
    },
    {
        question: "A disadvantage of IMAP is:",
        options: [
            "No folder support",
            "Higher server resource usage",
            "Deletes emails immediately",
            "Not secure"
        ],
        correct: 1
    },
    {
        question: "In Python's smtplib, which method initiates a connection to the server?",
        options: ["connect()", "open()", "start()", "begin()"],
        correct: 0
    },
    {
        question: "HTTP operates primarily over which transport protocol?",
        options: ["UDP", "ICMP", "TCP", "SCTP"],
        correct: 2
    },
    {
        question: "SMTP uses which mechanism to transfer data?",
        options: ["Push mechanism", "Pull mechanism", "Hybrid push–pull", "Signal-based delivery"],
        correct: 0
    },
    {
        question: "POP3 uses which mechanism to retrieve mail?",
        options: ["Push", "Pull", "Hybrid", "Event-driven"],
        correct: 1
    },
    {
        question: "IMAP allows users to:",
        options: [
            "Send emails",
            "Create server-side folders",
            "Upload files to remote servers",
            "Stream audio files"
        ],
        correct: 1
    },
    {
        question: "The main similarity between FTP and HTTP is:",
        options: [
            "Both use two channels",
            "Both transfer files",
            "Both use TCP",
            "Both use port 21"
        ],
        correct: 2
    },
    {
        question: "An SMTP 421 response code indicates:",
        options: ["Temporary failure", "Authentication required", "Invalid recipient", "Message too large"],
        correct: 0
    },
    {
        question: "IMAP servers commonly respond with:",
        options: ["200 OK", "+OK", "OK / NO / BAD", "ACCEPT / REJECT"],
        correct: 2
    },
    {
        question: "Which protocol allows resuming interrupted file transfers?",
        options: ["SMTP", "POP3", "HTTP", "FTP"],
        correct: 3
    },
    {
        question: "Python's smtplib.SMTPServerDisconnected occurs when:",
        options: [
            "Credentials are wrong",
            "Server closes the connection unexpectedly",
            "Message exceeds limits",
            "DNS lookup fails"
        ],
        correct: 1
    },
    {
        question: "Which protocol supports message flags such as 'Seen' or 'Deleted'?",
        options: ["POP3", "SMTP", "IMAP", "FTP"],
        correct: 2
    },
    {
        question: "An advantage of SMTP is:",
        options: [
            "Allows downloading messages",
            "Provides structured folder access",
            "Efficient message submission",
            "Synchronizes across devices"
        ],
        correct: 2
    },
    {
        question: "An HTTP 500 response code means:",
        options: ["Client error", "Successful response", "Informational message", "Internal server error"],
        correct: 3
    },
    // SSL/TLS Questions
    {
        question: "Which Python module provides a high-level interface for creating secure (SSL/TLS) network connections?",
        options: ["socket", "ssl", "cryptography", "hashlib"],
        correct: 1
    },
    {
        question: "What does SSL stand for?",
        options: [
            "Secure Socket Layer",
            "System Security Layer",
            "Secure Stream Level",
            "Socket Security Layer"
        ],
        correct: 0
    },
    {
        question: "Which function wraps an existing socket with SSL in Python?",
        options: ["ssl.wrap_socket()", "ssl.encrypt_socket()", "socket.wrap_ssl()", "ssl.SSLContext()"],
        correct: 0
    },
    {
        question: "What is the purpose of SSLContext in Python's ssl module?",
        options: [
            "To store socket data",
            "To manage SSL settings and certificates",
            "To handle TCP connections only",
            "To generate session cookies"
        ],
        correct: 1
    },
    {
        question: "Which version of TLS is considered most secure as of Python 3.11?",
        options: ["TLSv1.0", "TLSv1.1", "TLSv1.2", "TLSv1.3"],
        correct: 3
    },
    {
        question: "What does the parameter cert_reqs=ssl.CERT_REQUIRED enforce in a Python SSL connection?",
        options: [
            "The client must present a certificate",
            "The server ignores invalid certificates",
            "The SSL handshake is optional",
            "Encryption is disabled"
        ],
        correct: 0
    },
    {
        question: "Which of the following exceptions is raised when SSL handshake fails?",
        options: ["ssl.SSLError", "socket.error", "ConnectionError", "OSError"],
        correct: 0
    },
    {
        question: "In Python, which function is used to create an SSL context that verifies server certificates automatically?",
        options: [
            "ssl.SSLContext(ssl.PROTOCOL_TLS_CLIENT)",
            "ssl.wrap_socket()",
            "ssl.create_insecure_context()",
            "ssl.SSLClient()"
        ],
        correct: 0
    },
    {
        question: "Which of the following correctly verifies a certificate hostname?",
        options: [
            "ssl.match_hostname(cert, hostname)",
            "ssl.check_cert(cert, hostname)",
            "ssl.verify(cert)",
            "ssl.hostname_check()"
        ],
        correct: 0
    },
    {
        question: "When using HTTPS with Python's urllib, SSL is handled by:",
        options: [
            "The ssl module",
            "The underlying http.client using ssl",
            "The socket module directly",
            "Manual encryption"
        ],
        correct: 1
    },
    {
        question: "What method is used to wrap a server socket with SSL in Python 3?",
        options: [
            "ssl.wrap_socket(sock, server_side=True)",
            "ssl.bind_server(sock)",
            "ssl.wrap_server()",
            "socket.ssl_enable()"
        ],
        correct: 0
    },
    {
        question: "What happens if you connect to a TLS server using a plain (non-SSL) socket?",
        options: [
            "The connection succeeds but unencrypted",
            "The handshake fails and raises an exception",
            "The connection automatically upgrades",
            "Nothing, it just prints a warning"
        ],
        correct: 1
    },
    {
        question: "Which attribute of an SSL socket gives access to the server's certificate?",
        options: ["getpeercert()", "getpeername()", "peerinfo()", "getcertinfo()"],
        correct: 0
    },
    {
        question: "Which protocol constant enables automatic negotiation of the best available TLS version?",
        options: ["ssl.PROTOCOL_TLS", "ssl.PROTOCOL_SSLv3", "ssl.PROTOCOL_TLSv1_2", "ssl.PROTOCOL_NEGOTIATE"],
        correct: 0
    },
    {
        question: "What is the main difference between SSL and TLS?",
        options: [
            "TLS is the newer, more secure successor of SSL",
            "SSL is newer than TLS",
            "They are identical",
            "TLS is slower than SSL"
        ],
        correct: 0
    },
    {
        question: "Which option disables SSL certificate verification in an SSL context (not recommended)?",
        options: [
            "context.check_hostname = False and context.verify_mode = ssl.CERT_NONE",
            "context.disable_security()",
            "context.cert_reqs = False",
            'context.mode = "insecure"'
        ],
        correct: 0
    },
    {
        question: "Which Python library is often used for HTTPS client communication with SSL/TLS support by default?",
        options: ["requests", "urllib.parse", "socket", "hashlib"],
        correct: 0
    },
    {
        question: "Which of the following is true about the SSL handshake process?",
        options: [
            "It encrypts the connection before authentication",
            "It authenticates and negotiates encryption parameters",
            "It only exchanges keys",
            "It is optional in TLS"
        ],
        correct: 1
    },
    {
        question: "Which statement best describes the role of certificates in TLS communication?",
        options: [
            "They encrypt data directly",
            "They authenticate the identity of the communicating parties",
            "They speed up the handshake",
            "They store session data"
        ],
        correct: 1
    },
    // Additional Questions from answer2.txt - Exceptions Quiz
    {
        question: "When using Python sockets, which exception is raised if a connection attempt is refused by the target host?",
        options: ["socket.error", "ConnectionRefusedError", "TimeoutError"],
        correct: 1
    },
    {
        question: "What will happen if an exception is not caught inside an async function used in asyncio networking?",
        options: [
            "The event loop stops immediately",
            "The task is cancelled and an error is logged",
            "The exception is silently ignored"
        ],
        correct: 1
    },
    {
        question: "Which exception indicates that a socket was forcibly closed by the remote host?",
        options: ["BrokenPipeError", "ConnectionAbortedError", "socket.timeout"],
        correct: 1
    },
    {
        question: "What is the most appropriate block to release a socket resource even if an exception occurs?",
        options: ["try / except", "try / finally", "try / else"],
        correct: 1
    },
    {
        question: "Which built-in Python exception is raised when reading from a closed socket?",
        options: ["ConnectionResetError", "OSError: [Errno 9] Bad file descriptor", "socket.timeout"],
        correct: 1
    },
    {
        question: "In socket.connect(), if the host is unreachable, Python raises:",
        options: ["ConnectionRefusedError", "OSError: [Errno 113] No route to host", "ConnectionResetError"],
        correct: 1
    },
    {
        question: "Which statement correctly handles both connection and timeout errors in one block?",
        options: ["except (ConnectionError, TimeoutError):", "except socket:", "except socket.error or TimeoutError:"],
        correct: 0
    },
    {
        question: "When using socket.settimeout(5), a read operation exceeding this time raises:",
        options: ["OSError", "socket.timeout", "ConnectionResetError"],
        correct: 1
    },
    {
        question: "Which Python module defines the base class for many network-related exceptions?",
        options: ["sys", "socket", "asyncio"],
        correct: 1
    },
    {
        question: "What happens if an exception occurs inside an async with block managing a network stream?",
        options: [
            "The connection remains open",
            "The context manager ensures closure",
            "The program crashes"
        ],
        correct: 1
    },
    {
        question: "In Python 3, which class hierarchy includes most connection-related exceptions?",
        options: [
            "IOError → OSError → ConnectionError",
            "Exception → RuntimeError → socket.error",
            "SystemError → ConnectionError"
        ],
        correct: 0
    },
    {
        question: "To ensure the socket is closed safely after use, which structure is best practice?",
        options: ["with socket.socket(...) as s:", "try: ... except: ...", "close() before return"],
        correct: 0
    },
    {
        question: "When using multithreaded sockets, how should exceptions be handled?",
        options: [
            "Use one global try/except in main thread",
            "Wrap each thread's connection logic in its own try/except",
            "Ignore exceptions and continue"
        ],
        correct: 1
    },
    {
        question: "If the client disconnects unexpectedly, what exception might the server raise while sending data?",
        options: ["BrokenPipeError", "socket.timeout", "TimeoutError"],
        correct: 0
    },
    {
        question: "When an invalid IP address is passed to socket.connect(), which error is raised?",
        options: ["ConnectionRefusedError", "socket.gaierror", "ValueError"],
        correct: 1
    },
    {
        question: "What is the effect of `raise` with no arguments inside an `except` block?",
        options: [
            "Raises a new custom exception",
            "Re-raises the last caught exception",
            "Does nothing"
        ],
        correct: 1
    },
    {
        question: "How to catch all possible network exceptions safely?",
        options: ["except Exception:", "except socket.error:", "except BaseException:"],
        correct: 1
    },
    {
        question: "What exception is raised when binding a socket to an already-used port?",
        options: [
            "OSError: [Errno 98] Address already in use",
            "socket.timeout",
            "ConnectionAbortedError"
        ],
        correct: 0
    },
    {
        question: "When recv() returns an empty bytes object (b''), it means:",
        options: ["Timeout occurred", "Connection was closed by the peer", "Packet lost"],
        correct: 1
    },
    {
        question: "In asynchronous networking, how should exceptions be propagated from coroutines?",
        options: ["Return error strings", "Use raise inside async function", "Ignore exceptions"],
        correct: 1
    },
    {
        question: "Which exception type indicates DNS resolution failed?",
        options: ["ConnectionRefusedError", "socket.gaierror", "socket.timeout"],
        correct: 1
    },
    {
        question: "What does this code do if an exception occurs? try { s.connect(addr) } catch (e) { raise RuntimeError('Network failed') from e }",
        options: [
            "Suppresses the original error",
            "Chains the original exception",
            "Ignores traceback"
        ],
        correct: 1
    },
    {
        question: "Why is `finally` important in socket programming?",
        options: [
            "It only runs if there's no exception",
            "It ensures resource cleanup always",
            "It hides all exceptions"
        ],
        correct: 1
    },
    {
        question: "When handling asyncio exceptions, which method cancels a failing task?",
        options: ["task.abort()", "task.cancel()", "task.close()"],
        correct: 1
    },
    {
        question: "Is this timeout handler correct? try: data = s.recv(1024) except socket.timeout: print('Timeout occurred')",
        options: [
            "Correct",
            "Incorrect – must use TimeoutError",
            "Incorrect – must close socket first"
        ],
        correct: 0
    },
    {
        question: "What exception occurs if you try to send data over a socket that is not connected?",
        options: [
            "socket.error: [Errno 107] Transport endpoint is not connected",
            "BrokenPipeError",
            "TimeoutError"
        ],
        correct: 0
    },
    {
        question: "Which keyword allows you to execute code only if NO exception was raised in try?",
        options: ["else", "finally", "raise"],
        correct: 0
    },
    {
        question: "What happens if you `except socket.error as e:` but the actual exception is TimeoutError?",
        options: [
            "It will still catch it (TimeoutError is a subclass of OSError/IOError from socket ops)",
            "It won't catch it",
            "It raises a new exception automatically"
        ],
        correct: 0
    },
    {
        question: "Which exception is raised when the server forcibly closes a TCP connection?",
        options: ["ConnectionResetError", "socket.timeout", "BrokenPipeError"],
        correct: 0
    },
    {
        question: "Does this code guarantee graceful socket closure even if an exception happens? try: s = socket.socket(); s.connect(addr); s.send(b'Hello') finally: s.close()",
        options: [
            "Yes, correct",
            "No, should use except",
            "No, should not close in finally"
        ],
        correct: 0
    },
    // TCP/UDP Networking Quiz Questions
    {
        question: "What does TCP stand for in computer networking?",
        options: [
            "Transfer Control Protocol",
            "Transmission Control Protocol",
            "Total Control Protocol",
            "Transport Central Protocol"
        ],
        correct: 1
    },
    {
        question: "Which Python module is primarily used for socket-level network programming (TCP/UDP)?",
        options: ["os", "socket", "requests", "http"],
        correct: 1
    },
    {
        question: "Which Python call correctly creates a TCP socket?",
        options: [
            "socket.tcp()",
            "socket.create()",
            "socket.socket(socket.AF_INET, socket.SOCK_STREAM)",
            "socket.socket(socket.AF_INET, socket.SOCK_DGRAM)"
        ],
        correct: 2
    },
    {
        question: "Which method is used by a TCP client socket to initiate a connection to a remote server?",
        options: ["bind()", "connect()", "listen()", "accept()"],
        correct: 1
    },
    {
        question: "In a TCP server, what is the purpose of the bind() method?",
        options: [
            "To close the socket",
            "To receive data",
            "To associate the server socket with a local IP address and port",
            "To establish an outgoing connection"
        ],
        correct: 2
    },
    {
        question: "Which method on a TCP server socket tells the OS that the server is ready to accept incoming connection requests (and sets the backlog queue size)?",
        options: ["recv()", "send()", "listen()", "shutdown()"],
        correct: 2
    },
    {
        question: "Which method is called on a listening TCP server socket to obtain a new socket connected to a specific client?",
        options: ["accept()", "connect()", "attach()", "handshake()"],
        correct: 0
    },
    {
        question: "Which method is used by a connected TCP socket to send data to the peer?",
        options: ["write_data()", "send()", "transmit()", "forward()"],
        correct: 1
    },
    {
        question: "Which method is used by a connected TCP socket to receive incoming data bytes?",
        options: ["read()", "input()", "recv()", "pull()"],
        correct: 2
    },
    {
        question: "What does recv(1024) mean in Python socket programming?",
        options: [
            "Sets timeout to 1024 ms",
            "Guarantees 1024 bytes returned",
            "Specifies the maximum number of bytes to read from the socket in this call",
            "Encodes data as UTF-1024"
        ],
        correct: 2
    },
    {
        question: "In normal (blocking) mode, what happens if a TCP server calls accept() and no client is currently trying to connect?",
        options: [
            "Raises an exception",
            "Returns (None, None)",
            "The program exits",
            "accept() blocks (waits) until a client connects"
        ],
        correct: 3
    },
    {
        question: "Which statement best describes TCP communication?",
        options: [
            "Unreliable and unordered",
            "Connectionless",
            "Guarantees reliable, ordered, error-checked delivery of data",
            "Mainly used for broadcasting"
        ],
        correct: 2
    },
    {
        question: "Which method is used to close a socket (TCP or UDP) in Python once you are done with it?",
        options: ["stop()", "shutdown()", "close()", "terminate()"],
        correct: 2
    },
    {
        question: "What is the purpose of the shutdown() method on a TCP socket?",
        options: [
            "Destroys the socket object",
            "Restarts the TCP session",
            "Disables further sending and/or receiving on the socket (half-close), without fully closing the socket",
            "Broadcasts a disconnect message"
        ],
        correct: 2
    },
    {
        question: "Which of the following statements about UDP is correct?",
        options: [
            "Connection-oriented",
            "Connectionless and does not guarantee delivery",
            "Guarantees in-order, reliable transfer",
            "Automatically retransmits lost packets"
        ],
        correct: 1
    },
    {
        question: "Which Python call correctly creates a UDP socket?",
        options: [
            "socket.socket(socket.AF_INET, socket.SOCK_DGRAM)",
            "socket.socket(socket.AF_UDP, socket.SOCK_DGRAM)",
            "socket.socket(socket.AF_INET, socket.SOCK_STREAM)",
            "socket.create_udp()"
        ],
        correct: 0
    },
    {
        question: "Which method is typically used to send data with a UDP socket in Python?",
        options: ["send()", "sendto()", "post()", "push()"],
        correct: 1
    },
    {
        question: "Which method is typically used to receive data (and the sender's address) from a UDP socket in Python?",
        options: [
            "recv()",
            "recvfrom() is generally preferred for UDP because it returns both data and sender address",
            "UDP does not support reading data"
        ],
        correct: 1
    },
    {
        question: "What does it mean if recvfrom() on a UDP socket returns (data, addr)?",
        options: [
            "Switched to TCP mode",
            "Server accepted a connection",
            "You received a datagram 'data' from the remote sender identified by 'addr'",
            "Socket timed out"
        ],
        correct: 2
    },
    {
        question: "Why can we call bind() on a UDP socket?",
        options: [
            "To force UDP to become connection-oriented",
            "To associate the UDP socket with a specific local IP and port so it can receive datagrams",
            "To guarantee reliable delivery",
            "To negotiate a TLS session"
        ],
        correct: 1
    },
    {
        question: "Why is UDP often preferred for real-time streaming (voice, video, gaming telemetry)?",
        options: [
            "Guarantees no packet loss",
            "Forces packets to arrive in order",
            "Avoids connection setup and retransmission delays, leading to lower latency",
            "Encrypts all packets by default"
        ],
        correct: 2
    },
    {
        question: "What is the effect of the lack of acknowledgments (ACKs) and retransmission in UDP?",
        options: [
            "Improves reliability",
            "Makes the protocol slower",
            "Reduces latency but means delivery is not guaranteed",
            "Prevents packet loss completely"
        ],
        correct: 2
    },
    {
        question: "Which socket option is commonly set with setsockopt() to allow reusing a recently used local address/port?",
        options: ["SO_BROADCAST", "SO_REUSEADDR", "SO_PRIVATE", "SO_PROTECT"],
        correct: 1
    },
    {
        question: "Which socket option is typically enabled to allow sending broadcast packets over UDP?",
        options: ["SO_CONNECT", "SO_BROADCAST", "SO_LISTEN", "SO_TCPMODE"],
        correct: 1
    },
    {
        question: "Which call is commonly used to set the multicast Time-To-Live (TTL) for IPv4 multicast traffic in Python?",
        options: [
            "socket.enable_multicast(ttl)",
            "socket.setsockopt(socket.IPPROTO_IP, socket.IP_MULTICAST_TTL, ttl)",
            "socket.set_multicast_ttl(ttl)",
            "socket.multicast(ttl)"
        ],
        correct: 1
    },
    {
        question: "What does socket.settimeout(5) do on a socket in Python?",
        options: [
            "Closes the socket after 5 seconds",
            "Makes future operations non-blocking",
            "Causes socket operations like recv()/recvfrom() to raise socket.timeout if they block longer than 5 seconds",
            "Encrypts the socket for 5 seconds"
        ],
        correct: 2
    },
    {
        question: "Which exception should you typically catch if a socket operation (send/recv) fails due to a general network error?",
        options: ["IndexError", "socket.error (alias of OSError in Python 3)", "NameError", "UnicodeError"],
        correct: 1
    },
    {
        question: "Which specific exception is commonly raised if DNS name resolution fails, for example when the hostname cannot be resolved?",
        options: ["socket.gaierror", "socket.timeout", "ConnectionRefusedError", "ValueError"],
        correct: 0
    },
    {
        question: "What does it usually mean if recv() on a TCP socket returns an empty bytes object b''?",
        options: [
            "The peer has closed the connection gracefully",
            "Data corruption occurred",
            "The socket is now UDP-only",
            "The network card is offline"
        ],
        correct: 0
    },
    {
        question: "Why must you send bytes (e.g. b\"Hello\") rather than a plain string when using send() in Python sockets?",
        options: [
            "TCP only supports ASCII",
            "socket.send() transmits raw bytes objects, not Python str objects",
            "Unicode is illegal on the network",
            "recv() only returns strings"
        ],
        correct: 1
    },
    {
        question: "Which of the following best describes the normal server-side lifecycle for a basic TCP server in Python?",
        options: [
            "connect() → listen() → sendto()",
            "bind() → listen() → accept() → recv()/send()",
            "bind() → sendto() → recvfrom()",
            "connect() → recvfrom() → close()"
        ],
        correct: 1
    },
    {
        question: "Which of the following best describes the normal server-side lifecycle for a basic UDP \"server\" in Python?",
        options: [
            "bind() → recvfrom() → sendto()",
            "listen() → accept() → recv()",
            "connect() → listen() → shutdown()",
            "handshake() → ack() → stream()"
        ],
        correct: 0
    },
    {
        question: "What does socket.gethostname() return on most systems?",
        options: [
            "The remote peer's hostname",
            "The local machine's hostname",
            "The public IP address of the router",
            "The current DNS server name"
        ],
        correct: 1
    },
    {
        question: "Which statement about using recv() on a UDP socket is most accurate?",
        options: [
            "recv() is always correct",
            "Cannot receive UDP in Python",
            "recvfrom() is generally preferred for UDP"
        ],
        correct: 2
    },
    {
        question: "Why does TCP not support broadcasting to multiple hosts in one call the same way UDP can?",
        options: [
            "TCP always encrypts data",
            "TCP is unidirectional",
            "TCP is a point-to-point, connection-oriented stream between exactly two endpoints",
            "TCP packets cannot carry IP headers"
        ],
        correct: 2
    },
    {
        question: "Which statement about reliability is correct?",
        options: [
            "TCP performs retransmission and ordering; UDP does not",
            "UDP performs retransmission and ordering; TCP does not",
            "Both TCP and UDP retransmit automatically",
            "Neither TCP nor UDP retransmits"
        ],
        correct: 0
    }
];

// State Management
let currentQuestionIndex = 0;
let selectedAnswer = null;
let showAnswer = false;

// DOM Elements
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const submitBtn = document.getElementById('submitBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const restartBtn2 = document.getElementById('restartBtn2');
const answerFeedback = document.getElementById('answerFeedback');
const feedbackIcon = document.getElementById('feedbackIcon');
const feedbackText = document.getElementById('feedbackText');
const correctAnswer = document.getElementById('correctAnswer');
const closeFeedback = document.getElementById('closeFeedback');
const progressFill = document.getElementById('progressFill');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const questionCard = document.getElementById('questionCard');
const results = document.getElementById('results');
const scoreNumber = document.getElementById('scoreNumber');
const scorePercentage = document.getElementById('scorePercentage');

let score = 0;

// Initialize
totalQuestionsSpan.textContent = questions.length;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <input type="radio" name="answer" id="option${index}" value="${index}">
            <label for="option${index}">${String.fromCharCode(65 + index)}. ${option}</label>
        `;
        optionsContainer.appendChild(optionDiv);
    });
    
    // Add event listeners to options
    const radioInputs = document.querySelectorAll('input[name="answer"]');
    radioInputs.forEach(input => {
        input.addEventListener('change', () => {
            selectedAnswer = parseInt(input.value);
            submitBtn.disabled = false;
        });
    });
    
    // Reset state
    selectedAnswer = null;
    showAnswer = false;
    submitBtn.disabled = true;
    submitBtn.style.display = 'block';
    nextBtn.style.display = 'none';
    answerFeedback.style.display = 'none';
    
    // Update progress
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressFill.style.width = progress + '%';
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
}

function showFeedback(isCorrect) {
    answerFeedback.style.display = 'block';
    
    if (isCorrect) {
        feedbackIcon.textContent = '✓';
        feedbackIcon.className = 'feedback-icon correct';
        feedbackText.textContent = 'إجابة صحيحة!';
        feedbackText.className = 'feedback-text correct';
        score++;
    } else {
        feedbackIcon.textContent = '✗';
        feedbackIcon.className = 'feedback-icon incorrect';
        feedbackText.textContent = 'إجابة خاطئة';
        feedbackText.className = 'feedback-text incorrect';
    }
    
    const correctOption = String.fromCharCode(65 + questions[currentQuestionIndex].correct);
    correctAnswer.textContent = `الإجابة الصحيحة: ${correctOption}. ${questions[currentQuestionIndex].options[questions[currentQuestionIndex].correct]}`;
    correctAnswer.style.display = 'block';
    
    // Highlight correct answer in options
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        if (index === questions[currentQuestionIndex].correct) {
            option.classList.add('correct-option');
        }
        if (index === selectedAnswer && index !== questions[currentQuestionIndex].correct) {
            option.classList.add('incorrect-option');
        }
    });
    
    submitBtn.style.display = 'none';
    nextBtn.style.display = 'block';
}

function showResults() {
    questionCard.style.display = 'none';
    results.style.display = 'block';
    scoreNumber.textContent = score;
    const percentage = Math.round((score / questions.length) * 100);
    scorePercentage.textContent = percentage + '%';
}

// Event Listeners
submitBtn.addEventListener('click', () => {
    if (selectedAnswer !== null) {
        const isCorrect = selectedAnswer === questions[currentQuestionIndex].correct;
        showFeedback(isCorrect);
    }
});

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

closeFeedback.addEventListener('click', () => {
    answerFeedback.style.display = 'none';
});

restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    questionCard.style.display = 'block';
    results.style.display = 'none';
    loadQuestion();
});

restartBtn2.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    questionCard.style.display = 'block';
    results.style.display = 'none';
    loadQuestion();
});

// Initialize first question
loadQuestion();

