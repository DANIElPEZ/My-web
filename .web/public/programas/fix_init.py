import sys
def stream_logs(message, process):
    try:
        for line in process.stdout:
            decoded_line = line.decode('utf-8', errors='replace')
            sys.stdout.write(decoded_line)
            sys.stdout.flush()
    except UnicodeDecodeError as e:
        print(f"Error decoding line: {e}")
    except Exception as ex:
        print(f"Error streaming logs: {ex}")
    return iter([])